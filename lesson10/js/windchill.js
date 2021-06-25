


var t = document.getElementById("temperature").innerHTML;
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

document.getElementById("new").innerHTML = msg;

//


// The formula to calculate the wind chill factor is f=35.74+0.6215t−35.75s0.16+0.4275ts0.16, where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.

// Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."