$(document).ready(function () {
    // storage containers for local.storage
    let storedData = {};
    let cityArr = [];
    // storage for the weather api response
    var responseObj = {
       listDay : [],
    }
    // function for displaying 5 day forecast
    function displayForecastWeather(e) {
        event.preventDefault();
        var city = $("#cityInput").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=aadef2e30a8efe5bb715019df5f2a42a"
        response = {
            url: queryURL,
            method: "GET",
        }
        $.ajax(response).done(function (response) {
            // for loop for grabbing the next day in the array of timestamps 
            for (i = 1; i < 40; i = i + 8) {
                // setting variable for each day of the 5 day forecast
                var listDay = response.list[i];
                responseObj.listDay.push(listDay);
                console.log(responseObj);
            }
        })
    };
    function createdText() {
        // const city = response.city.name;
        // var windSpeed = listDay.wind.speed + "mph";
        // var date = listDay.dt_txt;
        // var feelsLike = listDay.main.feels_like;
        // var humidity = listDay.main.humidity;
        // var temp = listDay.main.temp;
        var citySpan = $('<h2 id="city" class="w3-text w3-jumbo">');
        $("#spanContainer").html(citySpan);
        $("#city").text(responseObj.listDay[1]);
    }
    // function showWeather() {
	// 	$("#mainWeather").addClass("w3-show");
	// 	$("#mainWeather").removeClass("w3-hide")
	// 	console.log($("#mainWeather").prop("classList"))
	
    $("#searchBtn").on("click", function () {
		event.preventDefault();
		displayForecastWeather();
		// showWeather();
		// storeCityArray();
		// bringCityArray();
	});

});