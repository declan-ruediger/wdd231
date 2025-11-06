const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=a52e39fa466446e94a138f1babb96417&units=metric";

async function apiFetch() {
    let response;
    let data;

    try {
        response = await fetch(url);
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
    currentTemp.innerHTML = `${weatherData.main.temp}°C`;

    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);

    captionDesc.innerHTML = weatherData.weather[0].description;
}


apiFetch();
