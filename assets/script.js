// setting variables from html
var iconElement = document.querySelector(".card-img-top")
var tempElement = document.querySelector(".temperature p") 
var descElement = document.querySelector(".temperature-description p")
var locationElement = document.querySelector(".city-state p")
var dateOf = document.querySelector(".dateOf p")
var kelvin = 273;

// Creating Weather Object
const weather = {
	temperature: {
		value: 18,
		unit: "celsius"
	},
	description: "few clouds",
	iconId: "01d",
	city: "London",
	country: "GB",
};


// Pulling from API ***https://rapidapi.com/community/api/open-weather-map?endpoint=apiendpoint_f719676c-072b-4a2d-ad2e-78f8375ea9c8**
var settings = {
	"async": true,
	"crossDomain": true,
	"url":  "https://api.openweathermap.org/data/2.5/forecast?q=austin,tx&appid=aadef2e30a8efe5bb715019df5f2a42a",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "934d54abe6mshed43b676517e5d3p149740jsn92f8645e66e1"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


// changing the text of the HTML function
function pullWeather(city, state) {
	let api = `https://api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid=aadef2e30a8efe5bb715019df5f2a42a`
	fetch(api).then(function (response) {
		let data = response.json();
		return data;
	})
		.then(function (data) {
			weather.temperature.value = Math.floor(data.main.temp - kelvin);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
			weather.city = data.name;
			weather.country = data.sys.country;
		})
		.then(function () {
			showWeather();
		})		
}
		

function showWeather() {
	iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;

	tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;

	descElement.innerHTML = weather.description;

	locationElement = `${weather.city}, ${weather.country}`;
}

// temperature conversions
function cToF(temperature) {
	(temperature * 9 / 5) + 32;
}
// to celsius from kelvin
weather.temperature.value = 300 - 273;


//button code to submit the city to the api

$(document).ready(function () {
	$(".btn").click(function () {
		var city = $("#city").val();
		if (city != '') {
			url: "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=aadef2e30a8efe5bb715019df5f2a42a",

		} else {
			$("#error").html("Cannot be empty ya filthy animal");
		}
	})
})

