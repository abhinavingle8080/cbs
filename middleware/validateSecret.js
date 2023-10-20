const { to, ReE } = require('../services/utilServices');
const CONFIG = require('../config/config.json');

let validateSecretKey = async function (req, res, next) {
    const providedSecretKey = req.headers['x-secret-key'];
    if (providedSecretKey === CONFIG.app_secret_key) {
        next();
    } else {
        return ReE(res, { statusCode : 201, static_key: 'UNAUTHORIZED_USER', message: "Unauthorized user." }, 201);
    }
}

module.exports.validateSecretKey = validateSecretKey;