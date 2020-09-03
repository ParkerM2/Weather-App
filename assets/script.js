// global variables
// Array to store local.storage list of searched cities
var storedData = {};
var cityArr = [];


// local storage fx
// storeCityArray();
// bringCityArray();
// displays city entered by the user

var city = $(".cityInput").val();
city = city.trim().toLowerCase();	
var city = $(".cityInput").val();
city = city.trim().toLowerCase();
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=aadef2e30a8efe5bb715019df5f2a42a";
 $.ajax({
	url: queryURL,
	method: "GET"
	});
console.log("queryURL", queryURL)
$(document).ready(function () {
	// function for displaying 5 day forecast 
	function displayForecastWeather(response) {
		// calling query url for forecast
		queryURL;
		// calling the forecast response from api
		
	
		console.log(response)
		// 	//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
		// for (i = 0; i < 40; i += 8) {
			var temp = response.list[i].main.temp;
		// 	temp = Math.floor(temp * 9 / 5 - 459);
			console.log(temp);
		// 	temp = temp + "°F";
		

		// 	var tempDescription = $("<p>").text("Daily Forecast : " + response.list[i].weather[0].description)
		// 	// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
		// 	var cityOf = $("<p1>").text("Weather Details For : " + response.city.name);
		// 	var windSpeed = $("<p>").text("Wind Speed : " + response.list[i].wind.speed + "mph");
		// 	var humidity = $("<p>").text("Humidity : " + response.list[i].main.humidity + " %");
		// 	// date = $("<p>").text("Current Date : " + response.list[i].dt_txt);
		// 	var div = $("<div class='container'>");
		// 	div.append(cityOf, date, temp, humidity, windSpeed, tempDescription);
		// 	$("#weatherContainer").append(div);
		// 	}
		}
	
	// This button will call the searched city through an AJAX Call to openweathermap.org

	$("#searchBtn").on("click", function () {
		event.preventDefault();
		displayForecastWeather();
		storeCityArray();
		bringCityArray();
	})
	// this function will store the searched cities into an Array
	function storeCityArray() {
		localStorage.setItem("city",JSON.stringify(cityArr))
	}
	// this function will pull the stored cities from the local storage
	function bringCityArray() {
		storedCity = JSON.parse(localStorage.getItem("city"));
	}


})
			
//response.list[0].main.temp * 9 / 5 - 459 ** for loop i = list.length ** run through i + (however many 3-4 to next day)