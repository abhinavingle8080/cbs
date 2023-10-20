const express = require('express');
const businessRouter = express.Router();
const businessController = require('../../controller/user/business.controller');
const validateSecretKey = require('../../middleware/validateSecret');
const validator = require('../../common/requests/user');
const errorHandler = require('../../middleware/errorHandler');

// Define routes for Business
businessRouter.post('/getAllBusinesses', businessController.getAllBusinesses);
businessRouter.post('/getBusinessById', businessController.getBusinessById);
businessRouter.post('/createBusiness', businessController.createBusiness);
businessRouter.post('/updateBusiness', businessController.updateBusiness);
businessRouter.post('/deleteBusiness', businessController.deleteBusiness);

module.exports = businessRouter;