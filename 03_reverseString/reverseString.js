const reverseString = function(string) {

    let str = string;
    
    let reversedString = "";

  for (let i = str.length; i >= 0 ; i--) {
    reversedString += string.charAt(i);
  }
  
  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;