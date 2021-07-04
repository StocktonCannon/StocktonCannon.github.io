const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=ccfcf63c0abf60de78a307ad1174d6c4"


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('weatherDescription').textContent = jsObject.weather[0].description;
    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

    var t = document.getElementById("temp").innerHTML;
    var wS = document.getElementById("windSpeed").innerHTML;
    windSpeed = parseInt(wS);
    temp = parseInt(t);
    var msg = "Wind Chill: NA"


    if (windSpeed > 3 && temp <= 50) {
        var solution = 35.74 + (.6215 * temp) - (35.75 * (windSpeed**.16)) + (.4275 * temp * (windSpeed ** .16));
        var round = Math.round(solution);
        var answer = round.toString();
        var msg = "Wind Chill: " + answer + " °F";
}

    document.getElementById('windChill').textContent = msg;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation

    const desc = jsObject.weather[0].description;  // note how we reference the weather array
     // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });