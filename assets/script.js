
$(document).ready(function () {

	// function celsiusToFahrenheit(temperature) {
	// 	return (temperature * 9 / 5) + 32;
	// }

	// This button will call the searched city through an AJAX Call to openweathermap.org

	$("#button").on("click", function (event) {

		event.preventDefault();
	
		var city = $("#city").val();
		var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=aadef2e30a8efe5bb715019df5f2a42a";

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			// calls weather function for displaying/grabbing info from api
			displayCurrentWeather(response);
			displayFutureWeatherOne(response);
			displayFutureWeatherTwo(response);
			displayFutureWeatherThree(response);
			displayFutureWeatherFour(response);
	
		})		
			function displayCurrentWeather(response) {
			//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
			console.log(response)
			console.log(response.list[0])
			var temp = response.list[0].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			var temperature = $(".temperature1").text(temp + " ° F");
			console.log(temp)
			var tempDescription = $(".temp-description1").text("Daily Forecast : " + response.list[0].weather[0].description)
			// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
			var cityOf = $(".city1").text("Weather Details For : " + response.city.name);
			var windSpeed = $(".wind-speed1").text("Wind Speed : " + response.list[0].wind.speed);
			var humidity = $(".humidity1").text("Humidity : " + response.list[0].main.humidity +" %");
			var date = $(".dateOf1").text("Current Date : " + response.list[0].dt_txt);	
		}
			function displayFutureWeatherOne(response) {
			//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
			console.log(response.list[8])
			var temp = response.list[8].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			var temperature = $(".temperature2").text(temp + " ° F");
			var tempDescription = $(".temp-description2").text("Daily Forecast : " + response.list[8].weather[0].description)
			// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
			var cityOf = $(".city2").text("Weather Details For : " + response.city.name);
			var windSpeed = $(".wind-speed2").text("Wind Speed : " + response.list[8].wind.speed);
			var humidity = $(".humidity2").text("Humidity : " + response.list[8].main.humidity +" %");
			var date = $(".dateOf2").text("Current Date : " + response.list[8].dt_txt);
		}
		function displayFutureWeatherTwo(response) {
			//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
			console.log(response.list[16])
			var temp = response.list[16].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			var temperature = $(".temperature3").text(temp + " ° F");
			var tempDescription = $(".temp-description3").text("Daily Forecast : " + response.list[16].weather[0].description)
			// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
			var cityOf = $(".city3").text("Weather Details For : " + response.city.name);
			var windSpeed = $(".wind-speed3").text("Wind Speed : " + response.list[16].wind.speed);
			var humidity = $(".humidity3").text("Humidity : " + response.list[16].main.humidity +" %");
			var date = $(".dateOf3").text("Current Date : " + response.list[16].dt_txt);
		}
		function displayFutureWeatherThree(response) {
			//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
			console.log(response.list[24])
			var temp = response.list[24].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			var temperature = $(".temperature4").text(temp + " ° F");
			var tempDescription = $(".temp-description4").text("Daily Forecast : " + response.list[24].weather[0].description)
			// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
			var cityOf = $(".city4").text("Weather Details For : " + response.city.name);
			var windSpeed = $(".wind-speed4").text("Wind Speed : " + response.list[24].wind.speed);
			var humidity = $(".humidity4").text("Humidity : " + response.list[24].main.humidity + " %");
			var date = $(".dateOf4").text("Current Date : " + response.list[24].dt_txt);
		}
		function displayFutureWeatherFour(response) {
			//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
			console.log(response.list[32])
			var temp = response.list[32].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			var temperature = $(".temperature5").text(temp + " ° F");
			var tempDescription = $(".temp-description5").text("Daily Forecast : " + response.list[32].weather[0].description)
			// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
			var cityOf = $(".city5").text("Weather Details For : " + response.city.name);
			var windSpeed = $(".wind-speed5").text("Wind Speed : " + response.list[32].wind.speed);
			var humidity = $(".humidity5").text("Humidity : " + response.list[32].main.humidity +" %");
			var date = $(".dateOf5").text("Current Date : " + response.list[32].dt_txt);
		}
	})
})
//response.list[0].main.temp * 9 / 5 - 459 ** for loop i = list.length ** run through i + (however many 3-4 to next day)