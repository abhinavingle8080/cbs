var { User, Role } = require("../../models");
const { to, ReE, ReS, TE } = require("../../services/util.service");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const bcryptjs = require("bcryptjs");
const CONFIG = require("../../config/config.json");
const appConfig = require('../../config/app.json')
const jwt = require("jsonwebtoken");
const app = require("../../services/app.services");
const config = require("../../config/app.json")[app["env"]];
const moment = require("moment");
const constants = require("../../config/constants");
const { renderTemplate } = require("../../helpers/template-helper");
const emailHelper = require("../../helpers/email.helper");
// const { createToken, checkToken, verifyToken } = require('../../helpers/verificationtoken.helper');
const { getGoogleOAuthClient } = require("../../helpers/authprovider.helper");

const isUserExist = async function (req, res) {
  const body = req.body;
  try {
    let isUserExist = await User.findOne({
      where: {
        email_id: body.email,
      },
    });
    if (!isUserExist) {
      return ReS(
        res,
        {
          statusCode: 200,
          message:
            res.__("User.User") + " " + res.__("Common.Validation.NotExist"),
        },
        200
      );
    } else if (isUserExist.status === constants.USER_STATUS.Pending) {
      return ReE(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Pending"),
          userStatus: isUserExist?.status,
        },
        200
      );
    } else if (
      isUserExist.status === constants.USER_STATUS.Rejected ||
      isUserExist.status === constants.USER_STATUS.Invalid
    ) {
      return ReE(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Rejected"),
          userStatus: isUserExist?.status,
        },
        200
      );
    } else {
      return ReE(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Registered"),
          userStatus: isUserExist?.status,
        },
        200
      );
    }
  } catch (error) {
    console.log(error);
    return ReE(
      res,
      { statusCode: 201, message: res.__("ErrorMessage"), err: error },
      201
    );
  }
};

const forgotPassword = async function (req, res) {
    try {
        const checkUser = await User.findOne({
            where: {
                email_id: req.body.email_id
            }
        });
        if (checkUser) {
            const subject = constants.RESET_PASSWORD_SUBJECT;
            const templateData = {
                name: `${checkUser.first_name} ${checkUser.last_name}`,
                logoUrl: `${appConfig.IMAGE_PATH}/logo.png`,
                text: `Your Community Business account password can be reset by clicking the button below. if you did not request a new password, please ignore this email.`,
                resetPasswordlink: `${appConfig.ADMIN_BASE_URL}/update-password?id=${btoa(checkUser.id)}`
            };
            const emailTemplate = await renderTemplate('user/forgotpassword.html', templateData);
            const emailRes = await emailHelper.sendMail(checkUser.email_id, subject, emailTemplate);
            return ReS(res, { statusCode : 200, message: res.__("Auth.ResetPasswordLinkSent")+`${req.body.email_id}`}, 201);
        }
        return ReE(res, { statusCode : 201, message: res.__("Auth.EmailNotExist")}, 201);
    } catch (error) {
        console.log(error);
        return ReE(res, { statusCode : 201, message: res.__("Common.Error.ErrorMessage"), err: error }, 200);
    }
}

const isUserPhoneExist = async function (req, res) {
  const body = req.body;
  try {
    let isUserExist = await User.findOne({
      where: {
        country_phone_code: body.country_phone_code,
        phone_number: body.phone_number,
      },
    });
    if (!isUserExist) {
      return ReS(
        res,
        {
          statusCode: 200,
          message:
            res.__("User.User") + " " + res.__("Common.Validation.NotExist"),
        },
        200
      );
    } else if (isUserExist.status === constants.USER_STATUS.Pending) {
      return ReE(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Pending"),
          userStatus: isUserExist?.status,
        },
        200
      );
    } else if (
      isUserExist.status === constants.USER_STATUS.Rejected ||
      isUserExist.status === constants.USER_STATUS.Invalid
    ) {
      return ReE(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Rejected"),
          userStatus: isUserExist?.status,
        },
        200
      );
    } else {
      return ReE(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Registered"),
          userStatus: isUserExist?.status,
        },
        200
      );
    }
  } catch (error) {
    console.log(error);
    return ReE(
      res,
      { statusCode: 201, message: res.__("ErrorMessage"), err: error },
      201
    );
  }
};

const signIn = async function (req, res) {
  const body = req.body;
  let loginResult;
  try {
    let checkUser = {};
    var validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (body.login_type === "NOR") {
      if (
        body?.password == "" ||
        body?.password == null ||
        body?.password == "undefined"
      ) {
        return ReE(
          res,
          { statusCode: 201, message: res.__("Auth.PasswordRequired") },
          201
        );
      }
    } else if (body.login_type === "GGL") {
      if (
        body?.google_id == "" ||
        body?.google_id == null ||
        body?.google_id == "undefined"
      ) {
        return ReE(
          res,
          { statusCode: 201, message: res.__("Auth.GoogleIDRequired") },
          201
        );
      }
    } else if (body.login_type === "APL") {
      if (
        body?.apple_id == "" ||
        body?.apple_id == null ||
        body?.apple_id == "undefined"
      ) {
        return ReE(
          res,
          { statusCode: 201, message: res.__("Auth.AppleIDRequired") },
          201
        );
      }
    }

    if (
      body.email_id.match(validEmailRegex) &&
      body.email_id.match(validEmailRegex) !== null
    ) {
      checkUser = await User.findOne({
        where: {
          email_id: body.email_id,
        },
      });
    } else {
      checkUser = await User.findOne({
        where: {
          phone_number: body.phone_number,
        },
      });
    }

    if (!checkUser) {
      return ReE(
        res,
        {
          statusCode: 201,
          redirectTo: "Register",
          message: res.__("Auth.UserNotRegisterd"),
        },
        201
      );
    }

    if (body.login_type === "NOR") {
      if (
        body?.password != "" &&
        body?.password != null &&
        body?.password != "undefined"
      ) {
        loginResult = await bcryptjs.compare(body.password, checkUser.password);
      }
    } else if (body.login_type === "GGL") {
      if (
        body?.google_id != "" &&
        body?.google_id != null &&
        body?.google_id != "undefined"
      ) {
        loginResult = await User.findOne({
          where: { email_id: checkUser.email_id, google_id: body?.google_id },
        });
      }
    } else if (body.login_type === "APL") {
      if (
        body?.apple_id != "" &&
        body?.apple_id != null &&
        body?.apple_id != "undefined"
      ) {
        loginResult = await User.findOne({
          where: { email_id: checkUser.email_id_id, apple_id: body?.apple_id },
        });
      }
    } else if (body.login_type === "FCB") {
      if (
        body?.facebook_id != "" &&
        body?.facebook_id != null &&
        body?.facebook_id != "undefined"
      ) {
        loginResult = await User.findOne({
          where: {
            email_id: checkUser.email_id,
            facebook_id: body?.facebook_id,
          },
        });
      }
    }

    if (!loginResult)
      return ReE(
        res,
        {
          statusCode: 201,
          message: res.__("Auth.InvalidCredentials"),
        },
        201
      );

    const token = jwt.sign(
      { user_id: checkUser.id, email: checkUser.email_id, user_type: "user" },
      CONFIG.jwt_encryption,
      { expiresIn: "365d" }
    );

    let userData = await User.findOne({
      where: {
        email_id: checkUser.email_id,
      },
      include: [
        {
          model: Role,
          as: "Role",
          attributes: ["id", "role"],
        },
      ],
      attributes: {
        exclude: [
          "role_id",
          "password",
          "gender",
          "date_of_birth",
          "reason",
          "grade_id",
        ],
      },
    });
    return ReS(res, {
      statusCode: 200,
      message: res.__("Auth.Signin"),
      data: userData,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return ReE(
      res,
      { statusCode: 201, message: res.__("ErrorMessage"), err: error },
      201
    );
  }
};

const signUp = async function (req, res) {
  try {
    const body = req.body;
    const saltRounds = 10;
    let userPassword = null;
    const email = await User.findOne({ where: { email_id: body.email_id } });
    if (email) {
      return ReE(
        res,
        { statusCode: 201, message: res.__("Auth.AlreadyRegisteredEmail") },
        201
      );
    }
    if (
      body?.phone_number != "" &&
      body?.phone_number != null &&
      body?.phone_number != "undefined"
    ) {
      const phone_number = await User.findOne({
        where: { phone_number: body.phone_number },
      });
      if (phone_number) {
        return ReE(
          res,
          { statusCode: 201, message: res.__("Auth.AlreadyRegisteredPhone") },
          201
        );
      }
    }
    if (
      body?.password != "" &&
      body?.password != null &&
      body?.password != "undefined" 
    //   &&
    //   body.login_type == "NOR"
    ) {
      console.log("password encrypting....");
      userPassword = bcrypt.hashSync(body.password, saltRounds);
    } else if (
      body.login_type == "NOR" &&
      (body?.password == "" || body?.password == null)
    ) {
      return ReE(
        res,
        { statusCode: 201, message: res.__("Auth.PasswordRequired") },
        201
      );
    }

    let user = await User.create({
      first_name: body.first_name || null,
      last_name: body.last_name || null,
      phone_number: body.phone_number || null,
      email_id: body.email_id,
      gender: body.gender || null,
      community: body.community || null,
      password: userPassword ? userPassword : "",
      role_id: body.role_id,
      address_id: body.address_id,
    });

    if (user) {
      // const templateData = {
      //     userName: `${body.first_name} ${body.last_name}`,
      //     logoUrl: `${config.IMAGE_PATH}/logo.png`,
      //     studentId : studentId
      // };
      // const emailTemplate = await renderTemplate('user/register.html', templateData);
      // await emailHelper.sendMail(body.email, constants.REGISTER_EMAIL_SUBJECT, emailTemplate);

      let userDetail = await User.findOne({
        where: {
          email_id: body.email_id,
        },
        include: [
          {
            model: Role,
            as: "Role",
            attributes: ["id", "role"],
          },
        ],
        attributes: {
          exclude: ["role_id", "password"],
        },
      });
      const token = jwt.sign(
        { user_id: user.id, email: User.email_id, user_type: "student" },
        CONFIG.jwt_encryption,
        { expiresIn: "365d" }
      );

      return ReS(
        res,
        {
          statusCode: 200,
          message: res.__("Auth.Signup"),
          data: userDetail,
          token: token,
        },
        200
      );
    }
    return ReE(res, { statusCode: 201, message: res.__("ErrorMessage") }, 201);
  } catch (error) {
    console.log(error);
    return ReE(
      res,
      {
        statusCode: 201,
        message: res.__("ErrorMessage"),
        err: error,
      },
      201
    );
  }
};

const sendEmail = async function (req, res) {
  try {
    const body = req.body;
    const templateData = {
      userName: "User Name",
      logoUrl: `${config.IMAGE_PATH}/logo.png`,
      content: `Email testing message.`,
    };
    const emailTemplate = await renderTemplate(
      "user/test-mail.html",
      templateData
    );
    const emailRes = await emailHelper.sendMail(
      body.email,
      body.subject,
      emailTemplate
    );
    return ReE(res, { statusCode: 200, data: emailRes }, 200);
  } catch (error) {
    console.log(error);
    return ReE(
      res,
      { statusCode: 201, message: res.__("ErrorMessage"), err: error },
      201
    );
  }
};

const getGoogleAccessToken = async function (req, res) {
  try {
    let accessToken = await getGoogleOAuthClient();
    return ReS(res, { statusCode: 200, data: accessToken }, 200);
  } catch (error) {
    return ReE(
      res,
      { statusCode: 201, message: "Somthing Went Wrong", err: error },
      201
    );
  }
};

module.exports = {
  isUserExist,
  isUserPhoneExist,
  forgotPassword,
  signIn,
  signUp,
  sendEmail,
  getGoogleAccessToken,
};
