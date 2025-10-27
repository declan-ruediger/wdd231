

function calculateWindChill(T, v) {
    return 13.12 + 0.6215 * T - 11.37 * (v ** 0.16) + 0.3965 * T * (v ** 0.16);
}

temperature = 10;
wind_speed = 22;

if (temperature <= 10 & wind_speed > 4.8) {
    wind_chill_value = calculateWindChill(temperature, wind_speed).toLocaleString();
} else {
    wind_chill_value = "N/A"
}


document.querySelector("#wind-chill-value").innerHTML = wind_chill_value;
