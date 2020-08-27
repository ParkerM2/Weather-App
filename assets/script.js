
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
		
	
		})		
			function displayCurrentWeather(response) {
			//for loop to go through the list and tell it to print out the stats of that corresponding day into a new div
				for (i = 0; i < 40; i += 8) {
					var temp = response.list[i].main.temp;
					temp = Math.floor(temp * 9 / 5 - 459);
					console.log(temp)
					temp = temp + "°F"

					var tempDescription = $(".temp-description1").text("Daily Forecast : " + response.list[i].weather[0].description)
					// var tempImage = $("<img>").attr("src", response.list[0].weather[0].icon);
					var cityOf = $("<p1>").text("Weather Details For : " + response.city.name);
					var windSpeed = $("<p>").text("Wind Speed : " + response.list[i].wind.speed + "mph");
					var humidity = $("<p>").text("Humidity : " + response.list[i].main.humidity + " %");
					var date = response.list[i].dt_txt
					console.log("this is date pre format", date)
					date = moment().format('D')
					console.log("this is date post format", date)
					date = $("<p>").text("Current Date : " + response.list[i].dt_txt);
					
					var div = $("<div class='container weather'>");
					div.append(cityOf, date, temp, humidity, windSpeed, tempDescription);
					$("#weatherCard1").append(div)
				}
		}
		
	})
})
//response.list[0].main.temp * 9 / 5 - 459 ** for loop i = list.length ** run through i + (however many 3-4 to next day)