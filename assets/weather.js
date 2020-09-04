$(document).ready(function () {
    // storage containers for local.storage
    let storedData = {};
    let cityArr = [];


    // storage for the weather api response
    //listDay is the original 5 days data :: 0-4 are each separate day's data
    var responseObj = {
        listDay: []
    };
    var day1 = [];
    var day2 = [];
    var day3 = [];
    var day4 = [];
    var day5 = [];

    // function for displaying 5 day forecast
    function displayForecastWeather(e) {
        event.preventDefault();
        let city = $("#cityInput").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=aadef2e30a8efe5bb715019df5f2a42a"
        response = {
            url: queryURL,
            method: "GET",
        }
        $.ajax(response).done(function (response) {
            let city = response.city.name;
            $("#city").html(city);
            // for loop for grabbing the next day in the array of timestamps 
            for (i = 1; i < 40; i = i + 8) {
                // setting variable for each day of the 5 day forecast
                let list = response.list[i];
                responseObj.listDay.push(list);
                // setup local.storage here in future?
            }
            console.log(responseObj.listDay)
        // Input = array of all days
        // Output = object with separate arrays of weather data for each day
            for (i = 1; i < 7; i++) {
                let list = responseObj.listDay[i]
                obj.days.push(list)
                // console.log("second List", list)
            }
            console.log(obj)
        })
    };

 // This will generate the variables needed   
    function createVariables() {
        // Cycles through the array of days and sets variables for the response info
            
            var date = day.dt_txt;
            var temp = day.main.temp;
            var feelsLike = day.main.temp;
            var humidity = day.main.humidity;
            var weatherD = day.weather.description;
            var weatherIcon = day.weather.weatherIcon;
            var iconID = day.weather.id;
            var wind = day.wind.speed + "mph";
        console.log(date,temp,feelsLike,humidity,weatherD,weatherIcon,iconId,wind)
    }
    
    
     // City Text
    var citySpan = $('<h2 id="city" class="w3-text w3-jumbo">');
    $("#spanContainer").html(citySpan);

    // function showWeather() {
	// 	$("#mainWeather").addClass("w3-show");
	// 	$("#mainWeather").removeClass("w3-hide")
	// 	console.log($("#mainWeather").prop("classList"))
	
    $("#searchBtn").on("click", function () {
            event.preventDefault();
            displayForecastWeather();
            createVariables();
            // showWeather();
            // storeCityArray();
            // bringCityArray();
    });

});