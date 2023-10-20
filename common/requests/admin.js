const { body, query, check, param } = require('express-validator')
var { Language } = require('../../models');

const PageHandlerValidation = [
    body('page')
        .not()
        .isEmpty()
        .withMessage('Page is required')
        .trim(),
    body('limit')
        .not()
        .isEmpty().
        withMessage('Limit is required')
        .trim()
]

const loginValidation = [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email address is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim()
]

const forgotPasswordValidation = [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email address is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim()
]

const resetPasswordValidation = [
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim()
]

//==============================================================================================
// LANGUAGE VALIDATION

const createLanguageValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateLanguageValidation = [
    body('language_id')
        .not()
        .isEmpty()
        .withMessage('language id is required')
        .trim(),  
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteLanguageValidation = [
    body('language_id')
        .not()
        .isEmpty()
        .withMessage('language id is required')
        .trim()
];

//==============================================================================================
// LANGUAGE VALIDATION

const createReportTypeValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateReportTypeValidation = [
    body('report_type_id')
        .not()
        .isEmpty()
        .withMessage('Report type id is required')
        .trim(),  
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteReportTypeValidation = [
    body('report_type_id')
        .not()
        .isEmpty()
        .withMessage('Report type id is required')
        .trim()
];

//==============================================================================================
// INTEREST VALIDATION

const createInterestValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateInterestValidation = [
    body('interest_id')
        .not()
        .isEmpty()
        .withMessage('interest id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteInterestValidation = [
    body('interest_id')
        .not()
        .isEmpty()
        .withMessage('Interest id is required')
        .trim()
];

//==============================================================================================
// PROFICIENCY VALIDATION

const createProficiencyValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),  
];

const updateProficiencyValidation = [
    body('proficiency_id')
        .not()
        .isEmpty()
        .withMessage('proficiency id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteProficiencyValidation = [
    body('proficiency_id')
        .not()
        .isEmpty()
        .withMessage('Proficiency id is required')
        .trim()
];

//==============================================================================================
// BADGE VALIDATION

const createBadgeValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateBadgeValidation = [
    body('badge_id')
        .not()
        .isEmpty()
        .withMessage('badge id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteBadgeValidation = [
    body('badge_id')
        .not()
        .isEmpty()
        .withMessage('Badge id is required')
        .trim()
];

//==============================================================================================
// SPECIALITY VALIDATION

const createSpecialityValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateSpecialityValidation = [
    body('speciality_id')
        .not()
        .isEmpty()
        .withMessage('speciality id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteSpecialityValidation = [
    body('speciality_id')
        .not()
        .isEmpty()
        .withMessage('Speciality id is required')
        .trim()
];

//==============================================================================================
// SERVICE VALIDATION

const createServiceValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),

];

const updateServiceValidation = [
    body('service_id')
        .not()
        .isEmpty()
        .withMessage('service id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteServiceValidation = [
    body('service_id')
        .not()
        .isEmpty()
        .withMessage('Service id is required')
        .trim()
];

//==============================================================================================
// SERVICE VALIDATION

const createGradeValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateGradeValidation = [
    body('grade_id')
        .not()
        .isEmpty()
        .withMessage('grade id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteGradeValidation = [
    body('grade_id')
        .not()
        .isEmpty()
        .withMessage('Grade id is required')
        .trim()
];


const createLevelValidation = [
    body('level')
        .not()
        .isEmpty()
        .withMessage('Level is required')
        .trim(),
];

const updateLevelValidation = [
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
    body('level')
        .not()
        .isEmpty()
        .withMessage('Level is required')
        .trim(),
];

const deleteLevelValidation = [
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim()
];

//==============================================================================================
// FOCUS AREA VALIDATION

const createFocusAreaValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateFocusAreaValidation = [
    body('focus_area_id')
        .not()
        .isEmpty()
        .withMessage('focus area id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteFocusAreaValidation = [
    body('focus_area_id')
        .not()
        .isEmpty()
        .withMessage('Focus Area id is required')
        .trim()
];

//==============================================================================================
// CURRICULAR VALIDATION

const createCurricularValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateCurricularValidation = [
    body('curricular_id')
        .not()
        .isEmpty()
        .withMessage('curricular id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteCurricularValidation = [
    body('curricular_id')
        .not()
        .isEmpty()
        .withMessage('Curricular id is required')
        .trim()
];

//==============================================================================================
// ACADEMIC VALIDATION

const createAcademicValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const updateAcademicValidation = [
    body('academic_id')
        .not()
        .isEmpty()
        .withMessage('Academic id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteAcademicValidation = [
    body('academic_id')
        .not()
        .isEmpty()
        .withMessage('Academic id is required')
        .trim()
];

//==============================================================================================
// SPORT VALIDATION

const createSportValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('sport id is required')
        .trim(),
];

const updateSportValidation = [
    body('sport_id')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
];

const deleteSportValidation = [
    body('sport_id')
        .not()
        .isEmpty()
        .withMessage('Sport id is required')
        .trim()
];

//==============================================================================================
// DREAM COLLEGE VALIDATION

const createDreamCollegeValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('phone_number')
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .trim()
];

const updateDreamCollegeValidation = [
    body('dreamcollege_id')
        .not()
        .isEmpty()
        .withMessage('dream college id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('phone_number')
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .trim()
];

const deleteDreamCollegeValidation = [
    body('dreamcollege_id')
        .not()
        .isEmpty()
        .withMessage('Dream college id is required')
        .trim()
];

//==============================================================================================
// STUDENT VALIDATION

const createStudentValidation = [
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('first_name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('last_name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('gender')
        .not()
        .isEmpty()
        .withMessage('gender is required')
        .trim(),
    body('date_of_birth')
        .not()
        .isEmpty()
        .withMessage('date_of_birth is required')
        .trim(),
    body('login_type')
        .not()
        .isEmpty()
        .withMessage('login_type is required')
        .trim(),
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim()
];

const updateStudentValidation = [
    body('student_id')
        .not()
        .isEmpty()
        .withMessage('student id is required')
        .trim(),
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('first_name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('last_name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('gender')
        .not()
        .isEmpty()
        .withMessage('gender is required')
        .trim(),
    body('date_of_birth')
        .not()
        .isEmpty()
        .withMessage('date_of_birth is required')
        .trim(),
    body('login_type')
        .not()
        .isEmpty()
        .withMessage('login_type is required')
        .trim(),
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim()
];

const deleteStudentValidation = [
    body('student_id')
        .not()
        .isEmpty()
        .withMessage('Student id is required')
        .trim()
];

//==============================================================================================
// CONSULTANT VALIDATION

const createConsultantValidation = [
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('first_name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('last_name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('gender')
        .not()
        .isEmpty()
        .withMessage('gender is required')
        .trim(),
    body('date_of_birth')
        .not()
        .isEmpty()
        .withMessage('date_of_birth is required')
        .trim(),
    body('login_type')
        .not()
        .isEmpty()
        .withMessage('login_type is required')
        .trim(),
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim()
];

const updateConsultantValidation = [
    body('consultant_id')
        .not()
        .isEmpty()
        .withMessage('Consultant id is required')
        .trim(),
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('first_name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('last_name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('gender')
        .not()
        .isEmpty()
        .withMessage('gender is required')
        .trim(),
    body('date_of_birth')
        .not()
        .isEmpty()
        .withMessage('date_of_birth is required')
        .trim(),
    body('login_type')
        .not()
        .isEmpty()
        .withMessage('login_type is required')
        .trim(),
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim()
];

const deleteConsultantValidation = [
    body('consultant_id')
        .not()
        .isEmpty()
        .withMessage('Student id is required')
        .trim()
];

const createGradeLevelAtlasValidation = [
    body('grade_id')
        .not()
        .isEmpty()
        .withMessage('Grade id is required')
        .trim(),
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
];

const updateGradeLevelAtlasValidation = [
    body('grade_level_atlas_id')
        .not()
        .isEmpty()
        .withMessage('grade level atlas id is required')
        .trim(),
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
    body('grade_id')
        .not()
        .isEmpty()
        .withMessage('Grade id is required')
        .trim(),
];
const deleteGradeLevelAtlasValidation = [
    body('grade_level_atlas_id')
        .not()
        .isEmpty()
        .withMessage('grade level atlas id is required')
        .trim()
];

//==============================================================================================
// CATEGORY VALIDATION

const createCategoryValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
    body('status')
        .not()
        .isEmpty()
        .withMessage('Status is required')
        .trim(),
];

const updateCategoryValidation = [
    body('category_id')
        .not()
        .isEmpty()
        .withMessage('Category id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
    body('status')
        .not()
        .isEmpty()
        .withMessage('Status is required')
        .trim(),
];
const deleteCategoryValidation = [
    body('category_id')
        .not()
        .isEmpty()
        .withMessage('Category id is required')
        .trim()
];

//==============================================================================================
// FAQ VALIDATION

const createFaqValidation = [
    body('category_id')
        .not()
        .isEmpty()
        .withMessage('Category id is required')
        .trim(),
    body('question')
        .not()
        .isEmpty()
        .withMessage('Question is required')
        .trim(),
    body('answer')
        .not()
        .isEmpty()
        .withMessage('Answer is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
    body('status')
        .not()
        .isEmpty()
        .withMessage('Status is required')
        .trim(),
];

const updateFaqValidation = [
    body('faq_id')
        .not()
        .isEmpty()
        .withMessage('Faq id is required')
        .trim(),
    body('category_id')
        .not()
        .isEmpty()
        .withMessage('Category id is required')
        .trim(),
    body('question')
        .not()
        .isEmpty()
        .withMessage('Question is required')
        .trim(),
    body('answer')
        .not()
        .isEmpty()
        .withMessage('Answer is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
    body('status')
        .not()
        .isEmpty()
        .withMessage('Status is required')
        .trim(),
];
const deleteFaqValidation = [
    body('faq_id')
        .not()
        .isEmpty()
        .withMessage('Faq id is required')
        .trim()
];

const createAssignmentValidation = [
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
    body('title')
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
];
const updateAssignmentValidation = [
    body('assignment_id')
        .not()
        .isEmpty()
        .withMessage('Assignment id is required')
        .trim(),
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
    body('title')
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
];
const deleteAssignmentValidation = [
    body('assignment_id')
        .not()
        .isEmpty()
        .withMessage('Assignment id is required')
        .trim()
];

const getExerciseByLevelValidation = [
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim()
];

const createExerciseValidation = [
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
    body('title')
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .trim(),
];

const updateExerciseValidation = [
    body('exercise_id')
        .not()
        .isEmpty()
        .withMessage('Exercise id is required')
        .trim(),
        body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim(),
    body('title')
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .trim(),
    body('type')
        .not()
        .isEmpty()
        .withMessage('Type is required')
        .trim(),
];

const deleteExerciseValidation = [
    body('exercise_id')
        .not()
        .isEmpty()
        .withMessage('Exercise id is required')
        .trim()
];

const getExerciseNoValidation = [
    body('level_id')
        .not()
        .isEmpty()
        .withMessage('Level id is required')
        .trim()
];

const createVideoValidation = [
    body('title')
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .trim()
];
const updateVideoValidation = [
    body('video_id')
        .not()
        .isEmpty()
        .withMessage('Video id is required')
        .trim(),
    body('title')
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .trim()
];
const deleteVideoValidation = [
    body('video_id')
        .not()
        .isEmpty()
        .withMessage('Video id is required')
        .trim()
];

const createSubscriptionValidation = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name id is required')
        .trim(),
    body('price')
        .not()
        .isEmpty()
        .withMessage('Price id is required')
        .trim(),
    body('duration')
        .not()
        .isEmpty()
        .withMessage('Duration id is required')
        .trim(),
    body('is_active')
        .not()
        .isEmpty()
        .withMessage('is_active id is required')
        .trim()
];

const updateSubscriptionValidation = [
    body('subscription_id')
        .not()
        .isEmpty()
        .withMessage('Subscription id is required')
        .trim(),
    body('name')
        .not()
        .isEmpty()
        .withMessage('Name id is required')
        .trim(),
    body('price')
        .not()
        .isEmpty()
        .withMessage('Price id is required')
        .trim(),
    body('duration')
        .not()
        .isEmpty()
        .withMessage('Duration id is required')
        .trim(),
    body('is_active')
        .not()
        .isEmpty()
        .withMessage('is_active id is required')
        .trim()
];

const deleteSubscriptionValidation = [
    body('subscription_id')
        .not()
        .isEmpty()
        .withMessage('Subscription id is required')
        .trim()
];

// Employee

const createEmployeeValidation = [
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .trim(),
    body('password')
        .not()
        .isEmpty().
        withMessage('Password is required')
        .trim(),
    body('role_id')
        .not()
        .isEmpty()
        .withMessage('Role id is required')
        .trim(),
];

const updateEmployeeValidation = [
    body('employee_id')
        .not()
        .isEmpty()
        .withMessage('Employee id is required')
        .trim(),
    body('first_name')
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .trim(),
    body('last_name')
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .trim(),
    body('role_id')
        .not()
        .isEmpty()
        .withMessage('Role id is required')
        .trim(),
];

const deleteEmployeeValidation = [
    body('employee_id')
        .not()
        .isEmpty()
        .withMessage('Employee id is required')
        .trim()
];

const getEmployeeValidation = [
    body('employee_id')
        .not()
        .isEmpty()
        .withMessage('Employee id is required')
        .trim()
];

// -------------------------------------------------------------------------------------------
// Question

const getQuestionValidation = [
    body('question_id')
        .not()
        .isEmpty()
        .withMessage('Question id is required')
        .trim()
];

const createQuestionValidation = [
    body('exercise_id')
        .not()
        .isEmpty()
        .withMessage('Exercise id is required')
        .trim(),
    body('question')
        .not()
        .isEmpty()
        .withMessage('Question is required')
        .trim(),
    body('points')
        .not()
        .isEmpty()
        .withMessage('Points is required')
        .trim(),
    body('correct_answer')
        .not()
        .isEmpty()
        .withMessage('Correct answer is required')
        .trim(),
    body('input_filed_count')
        .not()
        .isEmpty()
        .withMessage('Input filed count is required')
        .trim(),
];

const updateQuestionValidation = [
    body('question_id')
        .not()
        .isEmpty()
        .withMessage('Question id is required')
        .trim(),
    body('question')
        .not()
        .isEmpty()
        .withMessage('Question is required')
        .trim(),
    body('points')
        .not()
        .isEmpty()
        .withMessage('Points is required')
        .trim(),
    body('correct_answer')
        .not()
        .isEmpty()
        .withMessage('Correct answer is required')
        .trim(),
    body('input_filed_count')
        .not()
        .isEmpty()
        .withMessage('Input filed count is required')
        .trim(),
];

const deleteQuestionValidation = [
    body('question_id')
        .not()
        .isEmpty()
        .withMessage('Question id is required')
        .trim()
];


module.exports = {
    PageHandlerValidation,

    loginValidation,
    forgotPasswordValidation,
    resetPasswordValidation,

    createLanguageValidation,
    updateLanguageValidation,
    deleteLanguageValidation,

    createReportTypeValidation,
    updateReportTypeValidation,
    deleteReportTypeValidation,

    createInterestValidation,
    updateInterestValidation,
    deleteInterestValidation,

    createProficiencyValidation,
    updateProficiencyValidation,
    deleteProficiencyValidation,

    createBadgeValidation,
    updateBadgeValidation,
    deleteBadgeValidation,

    createSpecialityValidation,
    updateSpecialityValidation,
    deleteSpecialityValidation,

    createServiceValidation,
    updateServiceValidation,
    deleteServiceValidation,

    createGradeValidation,
    updateGradeValidation,
    deleteGradeValidation,

    createFocusAreaValidation,
    updateFocusAreaValidation,
    deleteFocusAreaValidation,

    createCurricularValidation,
    updateCurricularValidation,
    deleteCurricularValidation,

    createAcademicValidation,
    updateAcademicValidation,
    deleteAcademicValidation,

    createSportValidation,
    updateSportValidation,
    deleteSportValidation,

    createDreamCollegeValidation,
    updateDreamCollegeValidation,
    deleteDreamCollegeValidation,

    createStudentValidation,
    updateStudentValidation,
    deleteStudentValidation,

    createConsultantValidation,
    updateConsultantValidation,
    deleteConsultantValidation,

    createLevelValidation,
    updateLevelValidation,
    deleteLevelValidation,

    createGradeLevelAtlasValidation,
    updateGradeLevelAtlasValidation,
    deleteGradeLevelAtlasValidation,

    createCategoryValidation,
    updateCategoryValidation,
    deleteCategoryValidation,

    createFaqValidation,
    updateFaqValidation,
    deleteFaqValidation,

    createAssignmentValidation,
    updateAssignmentValidation,
    deleteAssignmentValidation,

    getExerciseByLevelValidation,
    createExerciseValidation,
    updateExerciseValidation,
    deleteExerciseValidation,
    getExerciseNoValidation,

    createVideoValidation,
    updateVideoValidation,
    deleteVideoValidation,

    createSubscriptionValidation,
    updateSubscriptionValidation,
    deleteSubscriptionValidation,

    createEmployeeValidation,
    updateEmployeeValidation,
    deleteEmployeeValidation,
    getEmployeeValidation,

    getQuestionValidation,
    createQuestionValidation,
    updateQuestionValidation,
    deleteQuestionValidation
}