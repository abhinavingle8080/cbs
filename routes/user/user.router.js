const express = require("express");
const passport = require("passport");
const validator = require("../../common/requests/user");
let errorHandler = require("../../middleware/errorHandler");
errorHandler = errorHandler.errorHandler;
require("../../middleware/passport")(passport);
const userMidd = require("../../middleware/user.middleware");
const validateSecretKey = require("../../middleware/validateSecret");

//  Import Controllers
const userRouter = express.Router();
const AuthController = require("../../controllers/user/auth.controller");
const DeviceTokenController = require("../../controllers/user/devicetoken.controller");

// Auth
userRouter.post(
  "/is-user-exists",
  validateSecretKey.validateSecretKey,
  validator.userExistValidation,
  errorHandler,
  AuthController.isUserExist
);
userRouter.post(
  "/is-user-phone-exists",
  validateSecretKey.validateSecretKey,
  validator.userPhoneExistValidation,
  errorHandler,
  AuthController.isUserPhoneExist
);
userRouter.post(
  "/sign-up",
   validateSecretKey.validateSecretKey,
  validator.userPhoneExistValidation,
  errorHandler,
  AuthController.signUp
);
userRouter.post(
  "/sign-in",
  validateSecretKey.validateSecretKey,
  validator.signInValidation,
  errorHandler,
  AuthController.signIn
);

userRouter.post(
  "/forget-password",
  validateSecretKey.validateSecretKey,
  validator.forgetPasswordValidation,
  errorHandler,
  AuthController.forgotPassword
)

userRouter.post(
  "/send-email",
  validateSecretKey.validateSecretKey,
  AuthController.sendEmail
);

userRouter.get(
  "/get-access-token",
  errorHandler,
  passport.authenticate("jwt", { session: false }),
  userMidd.checkUser,
  AuthController.getGoogleAccessToken
);
userRouter.post(
  "/create-device-token",
  validator.createDeviceTokenValidation,
  errorHandler,
  passport.authenticate("jwt", { session: false }),
  userMidd.checkUser,
  DeviceTokenController.createDeviceToken
);

module.exports = userRouter;
