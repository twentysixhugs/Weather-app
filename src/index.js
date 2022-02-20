import getWeatherData from './api_fetcher'
import { getReducedWeatherData, getCurrentTime } from './data';
import ui from './ui'

/* getWeatherData(prompt('Enter city/country', 'Minsk')).then(getReducedWeatherData).then(console.log); */

async function handleSearchSubmit(inputValue, e) {
  e.preventDefault();

  let weatherData;
  let reducedWeatherData;

  try {
    weatherData = await getWeatherData(inputValue);
    reducedWeatherData = await getReducedWeatherData(weatherData);

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
    // output to DOM
    console.log(reducedWeatherData);
  }
}

ui.initSearch(handleSearchSubmit);