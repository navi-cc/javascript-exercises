const convertToCelsius = function(number) {

  number = (number - 32) / (9/5);
  
  const round = (number, precise) => {

      let multiplier = Math.pow(10, precise || 0);

      return Math.round(number * multiplier) / multiplier;

  }

  return round(number, 1);

};

const convertToFahrenheit = function(number) {

  number = ((9/5) * number) + 32;
  
  const round = (number, precise) => {

    let multiplier = Math.pow(10, precise || 0);

    return Math.round(number * multiplier) / multiplier;

  }

  return round(number, 1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
