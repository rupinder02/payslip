/* app configuration */

let appConstants = {};

appConstants.projectName = "Payslip Generator";
if(process.env.NODE_ENV == 'DEV'){
    appConstants.port = '3000';
} else if(process.env.NODE_ENV == 'TEST'){
    appConstants.port = '3001';
} else if(process.env.NODE_ENV == 'LIVE'){
    appConstants.port = '3002';
} else {
    appConstants.port = '3001';
}

appConstants.dbConfig = {
    'host': 'localhost',
    'port': ''
};

module.exports = appConstants;