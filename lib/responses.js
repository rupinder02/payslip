let sendSuccess = function(res,data,message,statusCode){
    let response = {
        "statusText": message || "Success",
        "status": statusCode || 200,
        "data": data || {}
    };
    return res.send(response);
};

let sendError = function(res,data,message,statusCode){
    let response = {
        "statusText": message || "Bad request",
        "status": statusCode || 400,
        "data": data || {}
    };
    return res.send(response);
};

module.exports = {
    sendSuccess: sendSuccess,
    sendError: sendError
}

