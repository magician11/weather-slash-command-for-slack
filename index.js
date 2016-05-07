const city = 'Cape Town';

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const WEATHER_URL_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`;
const axios = require('axios');

axios.get(WEATHER_URL_ENDPOINT)
.then(function (response) {
  const weatherData = response.data;
  console.log(`The weather in ${weatherData.name} (${weatherData.sys.country}): ${weatherData.weather[0].description}`);
  console.log(`Current temperature: ${weatherData.main.temp} (High: ${weatherData.main.temp_max} Low: ${weatherData.main.temp_min})`);
})
.catch(function (response) {
  console.log(response);
});
