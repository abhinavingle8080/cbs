const { User } = require('../models');
const { to, ReE } = require('../services/util.service');
const constants = require("../config/constants");
const CONFIG = require('../config/config.json');

let checkUser = async function (req, res, next) {
    let user, err;
    const providedSecretKey = req.headers['x-secret-key'];
    if (providedSecretKey === CONFIG.app_secret_key) {
        [err, user] = await to(User.findOne({ 
            where: { 
                id: req.user.id,
                role_id : constants.ROLE.SUPERADMIN,
            } 
        }));
        if (err) return ReE(res, { static_key: 'UNAUTHORIZED_USER', message: "Unauthorized User." }, 201);
        user = req.user;
        next();
    } else {
        return ReE(res, { statusCode : 101, static_key: 'UNAUTHORIZED_USER', message: "Unauthorized user." }, 201);
    }
}
module.exports.checkUser = checkUser;