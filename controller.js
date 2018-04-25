let responses = require('./responses.js');
let commonFunction = require('./commonFunctions.js');

exports.printPayslip = function(req,res){
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let annualSalary = typeof req.body.annualSalary !== 'undefined'
    && req.body.annualSalary !== ''? parseFloat(req.body.annualSalary):req.body.annualSalary ;
    let superRate = typeof req.body.superRate !== 'undefined'
    && req.body.superRate !== '' ? parseFloat(req.body.superRate):req.body.superRate;
    let paymentStartDate = req.body.paymentStartDate;
    let payslip = {};

    let manValues = [firstName, lastName, annualSalary, superRate, paymentStartDate];

    if(!commonFunction.checkManValues(manValues)){
        responses.sendError(res);
    }

    payslip.name = firstName + " " + lastName;
    payslip.payPeriod = paymentStartDate;
    payslip.grossIncome = Math.round(annualSalary/12);
    payslip.incomeTax = commonFunction.incomeTaxCalculator(annualSalary);
    payslip.netIncome = Math.round(payslip.grossIncome - payslip.incomeTax);
    payslip.superValue = Math.round((payslip.grossIncome * superRate)/100);
    responses.sendSuccess(res,payslip);
};
