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
	"url":  "https://community-open-weather-map.p.rapidapi.com/forecast?q=nashville%252Ctn",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "98f849a757msh1ee7fc52fbeb99ep17651ajsn47a3e39c2bfd"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
