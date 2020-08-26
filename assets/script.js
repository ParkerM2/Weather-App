
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
			displayWeather(response);
	
		})		
			function displayWeather(response) {
				//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
			for (i = 0; i > response.list.length; i + 5)
			console.log(response.list[i])
			var temp = response.list[i].main.temp;
			temp = Math.floor(temp * 9 / 5 - 459);
			/// *** ASK BCS HOW TO SET THIS UP TO ADD THE NEXT CARDS for the FUTURE DATES IDK  HOW
			/// possibly check our activities folder from 3rd party apis
			var temperature = $(".temperature").text(temp + " ° F");
			var tempDescription = $(".temp-description").text("Daily Forecast : " + response.list[i].weather[0].description)
			// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
			var cityOf = $(".city").text("Weather Details For : " + response.city.name);
			var windSpeed = $(".wind-speed").text("Wind Speed : " + response.list[i].wind.speed);
			var humidity = $(".humidity").text("Humidity : " + response.list[i].main.humidity +" %");
			var date = $(".dateOf").text("Current Date : " + response.list[i].dt_txt);
			$(".weather").append($(".#weatherCard"))
			$("#weatherCard").text(temperature, tempDescription, cityOf, date, windSpeed, humidity);	
		}
	})
})
//response.list[0].main.temp * 9 / 5 - 459 ** for loop i = list.length ** run through i + (however many 3-4 to next day)