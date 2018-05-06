/* routes of payslip module */
let express = require('express');
let router = express.Router();
let controller = require('./payslip-controller.js');
let lib = require('../../lib');
let validate = require('express-validation');

router.post('/', function(req,res){
    res.send('payslip root');
});

/* get payslip data */
router.post('/print', validate(lib.validation.payslip),controller.printPayslip);

module.exports = router;