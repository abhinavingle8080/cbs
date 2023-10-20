const { body, query, check, param } = require("express-validator");

const userExistValidation = [
  body("email_id")
    .not()
    .isEmpty()
    .withMessage("Email address is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .trim(),
];

const userPhoneExistValidation = [
  body("country_phone_code")
    .not()
    .isEmpty()
    .withMessage("Country phone code is required")
    .trim(),
  body("phone_no")
    .not()
    .isEmpty()
    .withMessage("phone number is required")
    .trim(),
];

const createDeviceTokenValidation = [
  body("fcm_token").not().isEmpty().withMessage("Fcm token is required").trim(),
];

const logoutValidation = [
  body("fcm_token").not().isEmpty().withMessage("Fcm token is required").trim(),
];

const signUpValidation = [
  body("first_name")
    .not()
    .isEmpty()
    .withMessage("First Name is required")
    .trim(),
  body("last_name").not().isEmpty().withMessage("Last Name is required").trim(),
  body("email_id")
    .not()
    .isEmpty()
    .withMessage("Email address is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .trim(),
  body("login_type")
    .not()
    .isEmpty()
    .withMessage("Login type is required")
    .trim(),
  body("role").not().isEmpty().withMessage("Role is required").trim(),
];

const signInValidation = [
  body("email_id")
    .not()
    .isEmpty()
    .withMessage("Email address is required")
    // .isEmail()
    .withMessage("Please enter a valid email address")
    .trim(),
  // body('password')
  //     .not()
  //     .isEmpty()
  //     .withMessage('Password is required')
  //     .trim()
  body("login_type")
    .not()
    .isEmpty()
    .withMessage("Login type is required")
    .trim(),
];

// Common
const dataLimitValidation = [
  body("limit").not().isEmpty().withMessage("Limit is required").trim(),
];
const PageHandlerValidation = [
  body("page").not().isEmpty().withMessage("Page is required").trim(),
  body("limit").not().isEmpty().withMessage("Limit is required").trim(),
];

// Student
const createStudentValidation = [
  body("first_name")
    .not()
    .isEmpty()
    .withMessage("First Name is required")
    .trim(),
  body("last_name").not().isEmpty().withMessage("Last Name is required").trim(),
  body("grade_id")
    .not()
    .isEmpty()
    .withMessage("Grade id address is required")
    .trim(),
];
const updateStudentValidation = [
  body("student_id")
    .not()
    .isEmpty()
    .withMessage("Student id is required")
    .trim(),
  body("first_name")
    .not()
    .isEmpty()
    .withMessage("First Name is required")
    .trim(),
  body("last_name").not().isEmpty().withMessage("Last Name is required").trim(),
  body("grade_id")
    .not()
    .isEmpty()
    .withMessage("Grade id address is required")
    .trim(),
];
const deleteStudentValidation = [
  body("student_id")
    .not()
    .isEmpty()
    .withMessage("Student id is required")
    .trim(),
];

const forgetPasswordValidation = [
  body("email_id")
    .not()
    .isEmpty()
    .withMessage("Email address is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .trim(),
]

// Assignment Question Answer
const submitQuestionAnswerValidation = [
  body("student_id")
    .not()
    .isEmpty()
    .withMessage("Student id is required")
    .trim(),
  body("assignment_id")
    .not()
    .isEmpty()
    .withMessage("Assignment id is required")
    .trim(),
  body("question_id")
    .not()
    .isEmpty()
    .withMessage("Question id is required")
    .trim(),
];
const submitQuestionAnswersValidation = [
  body("student_id")
    .not()
    .isEmpty()
    .withMessage("Student id is required")
    .trim(),
  body("assignment_id")
    .not()
    .isEmpty()
    .withMessage("Assignment id is required")
    .trim(),
];

module.exports = {
  // Authentication
  userExistValidation,
  userPhoneExistValidation,
  signInValidation,
  signUpValidation,
  forgetPasswordValidation,
  createDeviceTokenValidation,
  logoutValidation,

  // Common
  dataLimitValidation,
  PageHandlerValidation,

  // Student
  createStudentValidation,
  updateStudentValidation,
  deleteStudentValidation,

  // Assignment Question Answer
  submitQuestionAnswersValidation,
  submitQuestionAnswerValidation,
};
