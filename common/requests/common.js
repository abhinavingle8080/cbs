const { body, query, check, param } = require('express-validator');

const updateApprovalRequest = [
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('First Name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('Last Name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email address is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('organization_name')
        .not()
        .isEmpty()
        .withMessage('Organization name is required')
        .trim(),
    body('country_phone_code')
        .not()
        .isEmpty()
        .withMessage('Country phone code is required')
        .trim(),
    body('phone_no')
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .trim(),
    
];

const getApprovalRequest = [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email address is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
];


module.exports = {
    updateApprovalRequest,
    getApprovalRequest
}