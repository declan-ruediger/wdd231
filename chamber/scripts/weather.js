const weatherCard = document.querySelector("#weather-card");
const forecastCard = document.querySelector("#forecast-card");

const url_weather = "https://api.openweathermap.org/data/2.5/weather?lat=-28.0035&lon=153.4574&appid=a52e39fa466446e94a138f1babb96417&units=metric";

async function apiFetch() {
    let response;
    let data;

    try {
        response = await fetch(url_weather);
        if (response.ok) {
            data = await response.json();
        } else {
            throw Error(response.text);
        }
        
        console.log(data);
    } catch(e) {
        console.log(e);
    }

    displayResults(data);
}

function displayResults(weatherData) {
    weatherCard.innerHTML = `
        <h2>Current Weather</h2>
        <div><img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="${weatherData.weather[0].description} icon"></div>
        <div>
            <p><strong>${weatherData.main.temp}° C</strong></p>
            <p>${weatherData.weather[0].description}</p>
            <p>High: ${weatherData.main.temp_max}°</p>
            <p>Low: ${weatherData.main.temp_min}°</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Sunrise: ${new Date(weatherData.sys.sunrise * 1000).toLocaleString(undefined, {"timeStyle": "short"})}</p>
            <p>Sunset: ${new Date(weatherData.sys.sunset * 1000).toLocaleString(undefined, {"timeStyle": "short"})}</p>
        </div>`;
}

apiFetch();

const url_forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=-28.0035&lon=153.4574&appid=a52e39fa466446e94a138f1babb96417&units=metric";

async function apiFetchForecast() {
    let response;
    let data;

    try {
        response = await fetch(url_forecast);
        if (response.ok) {
            data = await response.json();
        } else {
            throw Error(response.text);
        }
        
        console.log(data);
    } catch(e) {
        console.log(e);
    }

    displayForecastResults(data);
}

function displayForecastResults(forecastData) {
    forecastCard.innerHTML = `
        <h2>Weather Forecast</h2>
        <div>`;
    
    function formatter(dt) {
        let date = new Date(dt*1000);
        if (date.toLocaleDateString() == (new Date()).toLocaleDateString()) {
            return "Today";
        } else {
            return date.toLocaleDateString(undefined, {"weekday": "long"});
        }
    }
    
    let days = [];

    forecastData.list.forEach((weather) => {
        if (days.find((a) => a == formatter(weather.dt)) != undefined) {
            return;
        }

        days.push(formatter(weather.dt));
        forecastCard.innerHTML += `
            <p>${formatter(weather.dt)}: <strong>${weather.main.temp}°C</strong></p>
        `
    });
    forecastCard.innerHTML += `</div>`;
    
}

apiFetchForecast();