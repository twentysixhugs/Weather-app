// 6275fbc643b73392b948f38f9f200287
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6275fbc643b73392b948f38f9f200287

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6275fbc643b73392b948f38f9f200287`,
      { mode: 'cors' }
    );

    if (!response.ok) throw new Error('City not found. Please, try again.');
    return response.json();
  } catch (err) {
    alert(err)
    return;
  }
}

export default getWeatherData;