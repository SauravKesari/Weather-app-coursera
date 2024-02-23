

function showDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey= "e7599c4e2dd8e7e19af0bbb25f6d6d49";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    getData(apiUrl);
}

async function getData(apiUrl){
    var loading = document.getElementById('loading');
    loading.style.display = "block";
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = document.querySelector('.weather-icon');
    
    weatherIcon.style.display = 'block';
    weatherInfo.style.display ="block";
    weatherInfo.innerHTML = `<div class="weather-location">${data.name} </div>
    <div class="weather-temperature">${data.main.temp}°C</div>
    <div class="weather-details">
        <div><i class="fas fa-wind"></i>${data.wind.speed} mph</div>
        <div><i class="fas fa-thermometer-half"></i>${data.main.humidity}</div>
        <div><i class="fas fa-tachometer-alt"></i> ${data.main.pressure} hPa</div>
    </div>
    <div class="temp-info">
        <div> <i class="fa-solid fa-temperature-high"></i>${data.main.temp_max}°C</div>
        <div> <i class="fa-solid fa-temperature-low"></i>${data.main.temp_min}°C</div>
    </div>`;
    loading.style.display ="none";
}

document.getElementById('search').
addEventListener('click',showDetails);