$(document).ready(function () {
    var city;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=aadef2e30a8efe5bb715019df5f2a42a"
// storage containers for local.storage
    let storedData = {
        city:[]
    };
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
        var city = $("#cityInput").val();
        response = {
            url: queryURL,
            method: "GET",
        };
        $.ajax(response).done(function (response) {
            let city = response.city.name;
            $("#city").html(city);
 // for loop for grabbing the next day in the array of timestamps 
            for (i = 0; i < 40; i = i + 8) {
// setting variable for each day of the 5 day forecast
                let list = response.list[i];
                listDay.push(list);
            };
         
// parsing all of the data for each day to a corresponding array
            dayParse();
        });
    }
// function to grab each day's data and store it in its own array for easy grabbing
    function dayParse() {
            day1.push(listDay[0])
            day2.push(listDay[1])
            day3.push(listDay[2])
            day4.push(listDay[3])
            day5.push(listDay[4])
    }; 
// City Text
    var citySpan = $('<h2 id="city" class="w3-text w3-jumbo">');
    $("#spanContainer").html(citySpan);
// removes the w3.css framework class 'hide' so that all of the weather divs show on-click
    function showWeather() {
        $("#mainWeather").removeClass("w3-hide")
    };
// storing the searched city in local.Storage
    function storeCityArray() {
        let cityName = $("#cityInput").val();
        localStorage.setItem('city', cityName);
    }
       

// grabbing the searched city from local.Storage
    function bringCityArray() {
        var city = localStorage.getItem('city');
        storedData.city.push(city);
        console.log(storedData.city)
        
// capitalizing the first letter so that the new buttons look nice
// for loop to run through the saved city names and display new buttons
        for (i = 0; i > storedData.city.length; i++) {
            var newBtn = $('<button id="searchBtn' + i + '"class="w3-bar-item w3-button w3-hover-black"style="width:100%"/>');
            $('#searchBtn' + i).text(storedData.city[i]);
            $("#searchBtn").append(newBtn)
            console.log("for loop", newBtn)
           // need to figure this out, askBCS

            
        }
    }
// original search button
    $("#searchBtn1").on('click', function () {
        const city = storedData.city[0]
        storeCityArray();
        displayForecastWeather(city);
        showWeather();
        bringCityArray();
    })
    bringCityArray();



// onclick for searching the weather/storing the searched term into the localStorage/cityArr
    $("#searchBtn").on("click", function () {
        event.preventDefault();
        // previousSearch();
        storeCityArray();
        displayForecastWeather();
        showWeather();
        bringCityArray();
    });

// pushing data from day1-5Arr into the StoredData Obj in LocalStorage
});
