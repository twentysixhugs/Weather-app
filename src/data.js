class Data {
  constructor(...propsAndValues) {
    propsAndValues.forEach(propAndValue => {
      this[propAndValue[0]] = propAndValue[1];
    });
  }
}

function FtoC(t) {
  return (t - 32) * 5 / 9
}

function getProcessedWeatherData(data) {
  const processedData = new Data(
    ['feels_like_fahrenheit', data.main.feels_like],
    ['feels_like_celsius', FtoC(data.main.feels_like)],
    ['temp_fahrenheit', data.main.temp],
    ['temp_celsius', FtoC(data.main.temp)],
    ['humidity', data.main.humidity],
    ['name', data.name],
    ['country', data.sys.country],
    ['wind_speed', data.wind.speed],
  );

  return processedData;
}


export {
  getProcessedWeatherData,
};