class Data {
  constructor(...propsAndValues) {
    propsAndValues.forEach(propAndValue => {
      this[propAndValue[0]] = propAndValue[1];
    });
  }
}

function getReducedWeatherData(data) {
  const reducedData = new Data(
    ['feels_like', data.main.feels_like],
    ['humidity', data.main.humidity],
    ['temp', data.main.temp],
    ['name', data.name],
    ['country', data.sys.country],
    ['wind_speed', data.wind.speed],
  );

  return reducedData;
}

function getCurrentTime() {
  const now = new Date();

  return now.toLocaleTimeString('en-US', { hour: '1-digit', minute: '2-digit' })
}

export {
  getReducedWeatherData,
  getCurrentTime,
};