var { DeviceToken } = require("../../models");
const { ReE, ReS, to } = require("../../services/util.service");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const createDeviceToken = async function (req, res) {
  try {
    let body = req.body;
    const getDeviceToken = await DeviceToken.findOne({
      where: {
        fcm_token: body.fcm_token,
        user_id: req.user.id,
      },
      attributes: [
        "id",
        "device_id",
        "user_id",
        "device_type",
        "model_name",
        "manufacturer",
        "fcm_token",
      ],
    });
    if (!getDeviceToken) {
      await DeviceToken.create({
        device_id: body.device_id,
        user_id: req.user.id,
        device_type: body.device_type,
        model_name: body.model_name,
        manufacturer: body.manufacturer,
        manufacturer: body.manufacturer,
        fcm_token: body.fcm_token,
      });
    }
    return ReS(
      res,
      {
        statusCode: 200,
        message:
          res.__("DeviceToken.DeviceToken") +
          " " +
          res.__("Common.Success.InsertRecordMessage"),
      },
      200
    );
  } catch (error) {
    console.log(error);
    return ReE(
      res,
      { statusCode: 201, message: res.__("Common.Error.ErrorMessage") },
      201
    );
  }
};

module.exports = {
  createDeviceToken,
};
