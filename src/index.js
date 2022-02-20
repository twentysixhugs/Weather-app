import getWeatherData from './api_fetcher'
import { getReducedWeatherData } from './data';
import ui from './ui'

async function handleRequest(requestValue, e) {
  if (e) {
    e.preventDefault();
  }

  try {
    ui.toggleLoading();

    const reducedWeatherData = await processRequest(requestValue);
    // output to DOM
    ui.displayResults(reducedWeatherData);
  } catch (err) {

    switch (err.name) {
      case 'TypeError': {
        /* Run DOM function with some parameters as 'no data' */
      }
      case 'NothingFound': {
        alert(err.message);
      }
    }
  } finally {
    ui.toggleLoading();
  }
}

async function processRequest(requestValue) {
  let weatherData = await getWeatherData(requestValue);
  let reducedWeatherData = await getReducedWeatherData(weatherData);;

  return reducedWeatherData;
}


(async function init() {
  await handleRequest('Minsk');
  ui.initSearch(handleRequest);
})();
