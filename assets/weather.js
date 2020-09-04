$(document).ready(function () {
    // storage containers for local.storage
    let storedData = {};
    let cityArr = [];


    // storage for the weather api response
    //listDay is the original 5 days data :: 1-5 are each separate day's data
    var listDay = [];
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
            for (i = 0; i < 40; i = i + 8) {
            // setting variable for each day of the 5 day forecast
                let list = response.list[i];
                listDay.push(list);
            // setup local.storage here in future?
            }
        // parsing all of the data for each day to a corresponding array
            dayParse();
        })
    // function to grab each day's data and store it in its own array for easy grabbing
        function dayParse() {
            day1.push(listDay[0])
            day2.push(listDay[1])
            day3.push(listDay[2])
            day4.push(listDay[3])
            day5.push(listDay[4])
        };
    }; 
     // City Text
    var citySpan = $('<h2 id="city" class="w3-text w3-jumbo">');
    $("#spanContainer").html(citySpan);
// removes the w3.css framework class 'hide' so that all of the weather divs show on-click
    function showWeather() {
        $("#mainWeather").removeClass("w3-hide")
    }
// storing the searched city in local.Storage
    function storeCityArray() {
        localStorage.name = $("#cityInput").val();
    }

    function bringCityArray() {
    localStorage.getItem('name');
    console.log(localStorage.name)
}
    $("#searchBtn").on("click", function () {
            event.preventDefault();
            displayForecastWeather();
           
            showWeather();
            storeCityArray();
            bringCityArray();
    });

});