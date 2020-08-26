// setting variables from html
$(document).ready(function () {
	var iconElement = document.querySelector(".card-img-top")
	var tempElement = document.querySelector(".temperature")
	var descElement = document.querySelector(".temperature-description p")
	var locationElement = document.querySelector(".city-state p")
	var dateOf = document.querySelector(".dateOf p")
	var kelvin = 273;
	
	tempElement = Math.floor(tempElement);
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
	weather.temperature.value = 300 - 273;
	function celsiusToFahrenheit(temperature) {
		return (temperature * 9 / 5) + 32;
	}

	// This button will call the searched city through an AJAX Call to openweathermap.org

	$("#button").on("click", function (event) {

		event.preventDefault();
	
		var city = $("#city").val();
		var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=aadef2e30a8efe5bb715019df5f2a42a";

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {

			$(".temperature").text(response.list[0].main.temp * 9 / 5 - 459);
			tempElement = Math.floor(tempElement);
			$(".temp-description").text(response.list[0].weather[0].description)
			$(".city").text(response.city.name)
			$(".dateOf").text(response.list[0].dt_txt)

			console.log(response)
		}).then(function (data) {
		
			
		})
		
		
	})

})
