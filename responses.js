exports.sendSuccess = function(res,data,message,statusCode){
    let response = {
        "message": message || "Success",
        "statusCode": statusCode || 200,
        "data": data || {}
    };
    return res.send(response);
};

exports.sendError = function(res,data,message,statusCode){
    let response = {
        "message": message || "Bad request",
        "statusCode": statusCode || 400,
        "data": data || {}
    };
    return res.send(response);
};



