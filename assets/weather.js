$(document).ready(function () {
    // storage container for local.storage
    let storedData = {
        city: []
    };

    //listDay is the original 5 days data :: 1-5 are each separate day's data
    var listDay = [];

    // changing from degrees to cardinal directions
        var degToCard = function(deg){
            if (deg>11.25 && deg<33.75){
                return "NNE";
            }else if (deg>33.75 && deg<56.25){
                return "ENE";
            }else if (deg>56.25 && deg<78.75){
                return "E";
            }else if (deg>78.75 && deg<101.25){
                return "ESE";
            }else if (deg>101.25 && deg<123.75){
                return "ESE";
            }else if (deg>123.75 && deg<146.25){
                return "SE";
            }else if (deg>146.25 && deg<168.75){
                return "SSE";
            }else if (deg>168.75 && deg<191.25){
                return "S";
            }else if (deg>191.25 && deg<213.75){
                return "SSW";
            }else if (deg>213.75 && deg<236.25){
                return "SW";
            }else if (deg>236.25 && deg<258.75){
                return "WSW";
            }else if (deg>258.75 && deg<281.25){
                return "W";
            }else if (deg>281.25 && deg<303.75){
                return "WNW";
            }else if (deg>303.75 && deg<326.25){
                return "NW";
            }else if (deg>326.25 && deg<348.75){
                return "NNW";
            }else{
                return "N"; 
            }
}

    // function for displaying 5 day forecast
    function displayForecastWeather() {
        event.preventDefault();
        if (storedData.city.length === 0) {
            var city = $("#cityInput").val();
        } else {
            var city = localStorage.getItem('city')
        }
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=21fbf76c114d375ae6d63681a9744c5a";
        response = {
            url: queryURL,
            method: "GET",
        };
        $.ajax(response).done(function (response) {
            console.log("main response", response);
           
            // lat/long variables
            var lon = response.city.coord.lon;
            var lat = response.city.coord.lat
            uvCall(lat, lon);
            
        
            // for loop for grabbing the next day in the array of timestamps 
            for (i = 0; i < 40; i = i + 8) {

                // setting variable for each day of the 5 day forecast
                let list = response.list[i];
                listDay.push(list);
            };
        
            // showing the weather via w3-hide/w3-show
            showWeather();

            //put in for loop
            // adding text to screen for DAY ONE using Jquery
            console.log(listDay)
            for (i = 0; i < 5; i++) {
                var deg = listDay[i].wind.deg;

                let city = $("#cityName" + i);
                city.text(response.city.name);
                let cityTemp = $("#cityTemp" + i);
                cityTemp.text(listDay[i].main.temp + " °F")
                let cityDate = $("#date" + i);
                cityDate.text("Date : " + listDay[i].dt_txt);
                let wind = $("#wind" + i);
                wind.text("Wind Speed : " + listDay[i].wind.speed + "mph");
                let windDirection = $("#windDirection" + i);
                windDirection.text("Wind Direction : " + degToCard(deg));
                let desc = $("#desc" + i);
                desc.text(listDay[i].weather[0].description);
                let uvImg = $("#uvImg" + i);
                
                // weather picture, need to figure out API code for image
                //$("#weatherImg")
            }
            



        })
    };

    // API call for UV INDEX
    function uvCall(lat,lon) {
        event.preventDefault();
    
        var queryURL1 = "http://api.openweathermap.org/data/2.5/uvi?appid=aadef2e30a8efe5bb715019df5f2a42a&lat=" + lat + "&lon=" + lon + "";
        response = {
            url: queryURL1,
            method: "GET",
        };
        $.ajax(response).done(function (response) {
                let uvId = $("#uv")
                uvId.text("Current Uv index : " + response.value);
            
        })
    
    };


// removes the w3.css framework class 'hide' so that all of the weather divs show on-click
    function showWeather() {
        $("#mainWeather").removeClass("w3-hide")
    };

// creating new buttons
    function newBtn() {
        var btnDiv = $("#searchBtn1").removeClass("w3-hide");
        btnDiv.text("")
        btnDiv.html(localStorage.getItem('city'))
    }
    newBtn();

// onclick for searching the weather/storing the searched term into the localStorage/cityArr
    $("#searchBtn").on("click", function () {
        event.preventDefault();
        displayForecastWeather();
        // showWeather();
        // console.log(day1, "main search BTN ")
    });


// added search btn
    $("#searchBtn1").on('click', function () {
        event.preventDefault();
        displayForecastWeather();
        // showWeather();
        // console.log(day1, "searchBtn1")

    }) 

});