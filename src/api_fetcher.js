// 6275fbc643b73392b948f38f9f200287
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6275fbc643b73392b948f38f9f200287

async function getWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6275fbc643b73392b948f38f9f200287`,
    { mode: 'cors' }
  );

  if (!response.ok) {
    const error = new Error('Location not found.');
    error.name = "NothingFound";

    throw error;
  };
  return response.json();
}

export default getWeatherData;