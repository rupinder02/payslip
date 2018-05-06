let Joi = require('joi');

const payslip = {
    body: {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        annualSalary: Joi.number().required(),
        superRate: Joi.number().required(),
        paymentStartDate: Joi.string().required()
    }
};

module.exports = {
    payslip: payslip
};