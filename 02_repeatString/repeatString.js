const repeatString = function(str, n) {

    let str_concat = "";


    if (n < 0) {
        return "ERROR";
    } else {

        for (let i = 0; i < n; i++) {
            str_concat += str;
        }

    } 

    return str_concat;

};

// Do not edit below this line
module.exports = repeatString;
