const convertToCelsius = function(fahrenheitUnit) {
  let celciusUnit = (fahrenheitUnit - 32) * 5 / 9;
  return Math.round(celciusUnit * 10) / 10;
};

const convertToFahrenheit = function(celciusUnit) {
  let fahrenheitUnit = (celciusUnit * 9 / 5) + 32;
  return Math.round(fahrenheitUnit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
