const sumAll = function(num1, num2) {

    let sum = 0;
    
    if ((num1 <= -1 || num2 <= -1 ) || 
        (typeof num1 !== "number" || typeof num2 !== "number")) {
        return "ERROR";
    }

    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sum += i;   
        } 
    }

    for (let i = num1; i <= num2; i++) {
            sum += i;   
    } 

    return sum;
        
};


// Do not edit below this line
module.exports = sumAll;
