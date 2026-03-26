alert("JS IS RUNNING");

const API_KEY = "bc76fb7d4f8511a757d29fba3ac84a64";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Enter a city");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML =
        `<p>City not found</p>`;
      return;
    }

    displayWeather(data);

  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  const html = `
    <h2>${data.name}</h2>
    <p>${data.weather[0].main}</p>
    <h3>${data.main.temp} °C</h3>
  `;

  document.getElementById("weatherResult").innerHTML = html;
}