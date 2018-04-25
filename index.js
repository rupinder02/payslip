let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let controller = require('./controller.js');

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

/* root */
app.get('/', function(req,res){
    res.send("Welcome to Payslip Generator!");
})

/* get payslip data */
app.post('/printPayslip', controller.printPayslip);

/*start server*/
app.listen('3000', function(){
    console.log('server is listening on the port 3000');
});
