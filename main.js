async function getWeatherData() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a40e6252242bb1599a8a9cbea19db07c",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

document
  .getElementById("weatherSubmit")
  .addEventListener("click", handleWeather);

async function handleWeather(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "") return;
  console.log(value);
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    value +
    ",US&units=imperial" +
    "&APPID=a40e6252242bb1599a8a9cbea19db07c";
  const response = await fetch(url);
  const weatherData = await response.json();
  let results = "";
  results += "<h2>Weather in " + weatherData.name + "</h2>";
  for (let i = 0; i < weatherData.weather.length; i++) {
    results +=
      '<img src="https://openweathermap.org/img/wn/' +
      weatherData.weather[i].icon +
      '@2x.png"/>';
    results += "<h2>" + weatherData.main.temp + " &deg;F</h2>";
    results += "<p>";
    for (let i = 0; i < weatherData.weather.length; i++) {
      results += weatherData.weather[i].description;
    }
    results += "</p>";
  }
  document.getElementById("weatherResults").innerHTML = results;
}
