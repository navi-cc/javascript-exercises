const palindromes = function (string) {

    let reversedString = string.toLowerCase().split(/\W/gm).join('').split('').reverse().join('');
    string = string.toLowerCase().split(/\W/gm).join('');
    return string === reversedString
};
module.exports = palindromes;
