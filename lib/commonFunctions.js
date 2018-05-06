/* check mandatory params*/
let checkManValues = function(data){
    let isSuccess = true;
    data.forEach(function(param){
        if(typeof param === 'undefined' || param === '' || param === "" || param === null){
            isSuccess = false;
            return false;
        }
    });
    return isSuccess;
};

/* calculate income tax per month*/
let incomeTaxCalculator = function(income){
    let incomeTax = 0;
    if(income >= 0 && income <=18200){
        incomeTax = 0;
    } else if(income >= 18201 && income <= 37000){
        incomeTax = Math.round((income-18200)*(19/100));
    } else if(income >= 37001 && income <= 87000){
        incomeTax = Math.round(3572 + (income-37000)*(32.5/100));
    } else if(income >= 87001 && income <= 180000){
        incomeTax = Math.round(19822 + (income-87000)*(37/100));
    } else if(income >= 180001){
        incomeTax = Math.round(54232 + (income - 180000)*(45/100));
    } else {
        incomeTax = 0;
    }
    return Math.round(incomeTax/12);
};

module.exports = {
    checkManValues: checkManValues,
    incomeTaxCalculator: incomeTaxCalculator
}