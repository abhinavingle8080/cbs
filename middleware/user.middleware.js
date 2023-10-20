const { User } = require('../models');
const { to, ReE } = require('../services/util.service');
const CONFIG = require('../config/config.json');

let checkUser = async function (req, res, next) {
    let user, err;
    const providedSecretKey = req.headers['x-secret-key'];
    if (providedSecretKey === CONFIG.app_secret_key) {
        [err, user] = await to(User.findOne({ 
            where: { 
                id: req.user.id
            }}
        ));
        if (err) 
            return ReE(res, { statusCode : 201, static_key: 'UNAUTHORIZED_USER', message: "Unauthorized user." }, 201);
        user = req.user;
        next();
    } else {
        return ReE(res, { statusCode : 201, static_key: 'UNAUTHORIZED_USER', message: "Unauthorized user." }, 201);
    }
}
module.exports.checkUser = checkUser;