const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1 , num2) {
    return num1 - num2
};

const sum = function(array) {
  return array.reduce((total, num) => total += num , 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total *= num , 1);
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {

  let factorial = 1;

  if (num === 0 || num === 1) return factorial;


  for (let i = 1; i <= num; i++) {
    factorial *= i
  }

  return factorial;


  


};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
