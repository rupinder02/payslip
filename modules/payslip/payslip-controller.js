let lib = require('../../lib');

let printPayslip = function(req,res){
    try {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let annualSalary = req.body.annualSalary;
        let superRate = req.body.superRate;
        let paymentStartDate = req.body.paymentStartDate;
        let payslip = {};

        payslip.name = firstName + " " + lastName;
        payslip.payPeriod = paymentStartDate;
        payslip.grossIncome = Math.round(annualSalary/12);
        payslip.incomeTax = lib.commonFunctions.incomeTaxCalculator(annualSalary);
        payslip.netIncome = Math.round(payslip.grossIncome - payslip.incomeTax);
        payslip.superValue = Math.round((payslip.grossIncome * superRate)/100);
        lib.responses.sendSuccess(res,payslip);
    } catch(err) {
        console.log(".....error....: ", err);
        res.send(err);
    }
};

module.exports = {
    printPayslip: printPayslip
}
