'use-strict';

let constants = {
    ROLE: {
        SUPERADMIN: 1,
        PARENT: 2
    },
    DATA_LIMIT : {
        Limit : 10,
    },
    RESET_PASSWORD_SUBJECT: "RESET PASSWORD",
    REQUEST_APPROVAL_SUBJECT: "Status Of Request",
    REGISTER_EMAIL_SUBJECT: "Welcome to Community Business App! Let the world knwo about your business!",
    USER_STATUS : {
        Pending : "Pending",
        Approved : "Approved",
        Rejected : "Rejected",
        Invalid : "Invalid" 
    },
    VERIFICATION_TYPE:{
        Email: "Email",
        Phone: "Phone"
    },
    OTP_LENGTH : 4,
    EXERCISE_TYPE: {
        SingleInput : "Single-Input",
        MultipleInput : "Multiple-Input",
        SelectOption : "Select-Option",
        Arrangement : "Arrangement",
    },
}

module.exports = Object.freeze(constants); // freeze prevents changes by users