import getWeatherData from './api_fetcher'
import { getReducedWeatherData } from './data';
import ui from './ui'

/* getWeatherData(prompt('Enter city/country', 'Minsk')).then(getReducedWeatherData).then(console.log); */

async function processRequest(inputValue, e) {
  e.preventDefault();

  let weatherData;
  let reducedWeatherData;

  try {
    weatherData = await getWeatherData(inputValue);
    reducedWeatherData = await getReducedWeatherData(weatherData);

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

    console.log(reducedWeatherData);
  }
}

ui.initSearch(processRequest);