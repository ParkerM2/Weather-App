// setting variables from html
var iconElement = document.querySelector(".card-img-top")
var tempElement = document.querySelector(".temperature p") 
var descElement = document.querySelector(".temperature-description p")
var locationElement = document.querySelector(".city-state p")
var dateOf = document.querySelector(".dateOf p")


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
	"url":  "https://community-open-weather-map.p.rapidapi.com/forecast?q=Greenville%252CMS",
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
function showWeather(city, state) {
	let api = `https://community-open-weather-map.p.rapidapi.com/forecast?q=${city}%252C${state}`
	fetch(api).then(function (response) {
		let data = response.json();
		return data;
	})
	
	iconElement.innerHTML = `<img src="icons/${weather.iconID}.png"/>`;

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

