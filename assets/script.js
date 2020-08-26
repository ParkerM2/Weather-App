// setting variables from html
var iconElement = document.querySelector(".card-img-top")
var tempElement = document.querySelector(".temperature p") 
var descElement = document.querySelector(".temperature-description p")
var locationElement = document.querySelector(".city-state p")
var dateOf = document.querySelector(".dateOf p")
var kelvin = 273;

// Creating Weather Object
// const weather = {
// 	temperature: {
// 		value: 18,
// 		unit: "celsius"
// 	},
// 	description: "few clouds",
// 	iconId: "01d",
// 	city: "London",
// 	country: "GB",
// };


document.querySelector("#city")
document.querySelector("#state")
// Pulling from API ***https://rapidapi.com/community/api/open-weather-map?endpoint=apiendpoint_f719676c-072b-4a2d-ad2e-78f8375ea9c8**
var city = "austin"
var state = "tx"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + state + "&appid=aadef2e30a8efe5bb715019df5f2a42a"

$.ajax({
	url: queryURL,
	method: "GET"
}).then(function (response) {
	console.log(response)
})


