
let weatherApi = {
  key: "4bafcff33f73384be4b9532be8e4d0e2",

  baseUrl: " https:api.openweathermap.org/data/2.5/weather",
};
const inpu = document.getElementById("text");
inpu.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(inpu.value);
    getweatherReport(inpu.value);
  }
});
function getweatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metrics`)
    .then((weather) => {
      console.log("weather", weather);
      return weather.json();
    })
    .then(showWeather);
}
function showWeather(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}°C `;

  let minmaxtemp = document.getElementById("min-max");
  minmaxtemp.innerHTML = `${Math.floor(
    weather.main.temp_min - 273.15
  )}°C(min)/${Math.ceil(weather.main.temp_max - 273.15)}°C(max)`;

  let type = document.getElementById("weather");
  type.innerText = `${weather.weather[0].main}`;

  if (type.textContent == "Rain") {
    document.body.style.backgroundImage = "url('rain2.jpg')";
  } else if (type.textContent == "Smoke") {
    document.body.style.backgroundImage = "url('smoky.avif')";
  } else if (type.textContent == "Sunny") {
    document.body.style.backgroundImage = "url('sunny2.jpg')";
  } else if (type.textContent == "Cloud") {
    document.body.style.backgroundImage = "url('cloud.jpg')";
  } else if (type.textContent == "Night") {
    document.body.style.backgroundImage = "url('night image.jpg')";
  } else if (type.textContent == "Haze") {
    document.body.style.backgroundImage = "url('kkkk.jpg')";
  } else if (type.textContent == "Clear") {
    document.body.style.backgroundImage = "url('y.webp')";
  }
  let date = new Date();
  let years = date.getFullYear();
  let dates = date.getDate();
  let month = date.getMonth() + 1;
  document.getElementById("date").innerHTML = dates + "/" + month + "/" + years;
}
