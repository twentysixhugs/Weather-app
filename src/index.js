import getWeatherData from './api_fetcher'
import { getProcessedWeatherData } from './data'
import ui from './ui'

async function handleRequest(requestValue, e) {
  if (e) {
    e.preventDefault();
  }

  try {
    ui.toggleLoading();

    const processedWeatherData = await processRequest(requestValue);
    // output to DOM
    ui.handleSearchOutput(processedWeatherData);
  } catch (err) {
    alert(err.message);
  } finally {
    ui.toggleLoading();
  }
}

async function processRequest(requestValue) {
  let weatherData = await getWeatherData(requestValue);
  let processedWeatherData = await getProcessedWeatherData(weatherData);;

  return processedWeatherData;
}


(async function init() {
  await handleRequest('Minsk');
  ui.initSearch(handleRequest);
  ui.initUnitToggle();
})();
