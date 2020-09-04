// global variables
// Array to store local.storage list of searched cities
var storedData = {};
var cityArr = [];


// local storage fx
// storeCityArray();
// bringCityArray();


$(document).ready(function () {
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=aadef2e30a8efe5bb715019df5f2a42a";
	function showWeather() {
		$("#mainWeather").addClass("w3-show");
		$("#mainWeather").removeClass("w3-hide")
  	}
	// function for displaying 5 day forecast 
	function displayForecastWeather(e) {
		// calling query url for forecast
		var city = $("#cityInput").val();

		queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=aadef2e30a8efe5bb715019df5f2a42a"

		$.ajax({
			url: queryURL,
			method: "GET",
		}).done(function (e) {
			console.log(e)

		let weatherResponse = [];
		for (i=0; i < e.list[.lenth]; i=i+8) {
			var list = e.list[i].main.temp
			weatherResponse.push(list)
			weatherResponse.push(e.city.name)
			console.log(list)
		}
		console.log(weatherResponse.name);
		weatherResponse.name

		//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div

		for (i = 0; i < 40; i += 8) {
			var temp = e.list[i].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			console.log(temp);
			temp = temp + "°F";
			// $("#temp31").html( '<span id="temp31" class="w3-large">Temperature :'+ temp.join("</span>"))
			var tempDescription = $("<p>").text("Daily Forecast : " + e.list[i].weather[0].description)
			var tempImage = $("<img>").attr("src", e.list[0].weather[0].icon);
			var cityOf = $("<p1>").text("Weather Details For : " + e.city.name);
			var windSpeed = $("<p>").text("Wind Speed : " + e.list[i].wind.speed + "mph");
			var humidity = $("<p>").text("Humidity : " + e.list[i].main.humidity + " %");
			var date =$("<p>").text("Current Date : " + e.list[i].dt_txt);
			var div = $("<div class='container'>");
			div.append(cityOf, date, temp, humidity, windSpeed, tempDescription);
			$("#contentContainer")
			}})};
		// This button will call the searched city through an AJAX Call to openweathermap.org
		$("#searchBtn").on("click", function (e) {
			event.preventDefault();
		
			displayForecastWeather(e);
			showWeather();
		// 	storeCityArray();
		// 	bringCityArray();
		})
	// this function will store the searched cities into an Array
	// function storeCityArray() {
	// 	localStorage.setItem("city",JSON.stringify(cityArr))
	// }
	// // this function will pull the stored cities from the local storage
	// function bringCityArray() {
	// 	storedCity = JSON.parse(localStorage.getItem("city"));
	// }

// storing response items in an array
// each array should have values 1-5 for each day of the forecast

})
//e.list[0].main.temp * 9 / 5 - 459 ** for loop i = list.length ** run through i + (however many 3-4 to next day)