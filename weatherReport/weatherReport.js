

function showDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey= "e7599c4e2dd8e7e19af0bbb25f6d6d49";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    getData(apiUrl);
}

async function getData(apiUrl){
    const response = await fetch(apiUrl);
    const data = await response.json();
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
}

document.getElementById('weatherForm').
addEventListener('submit',showDetails);