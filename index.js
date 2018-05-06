let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let winston_logger = require("./lib/request_logger.js");
let config = require('./config');


let payslipRouter = require('./modules/payslip/payslip-route.js');

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(function(req,res,next){
    console.log("request URL: ", new Date(), req.method, req.originalUrl);
    next();
});
app.use(winston_logger.createExpressLogger());
app.use('/payslip', payslipRouter);


/* root */
app.get('/', function(req,res){
    res.send("Welcome to Payslip Generator!");
})

/* error handler */
app.use(function(err, req, res, next){
    res.send(err);
    next();
})


/*start server*/
app.listen(config.appConfig.port, function(){
    console.log("Server is listening on the port " + config.appConfig.port);
});




