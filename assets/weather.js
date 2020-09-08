$(document).ready(function () {
// storage container for local.storage
    let storedData = {
        city:[]
    };

    
//listDay is the original 5 days data :: 1-5 are each separate day's data
    var listDay = [];
    var day1 = [];
    var day2 = [];
    var day3 = [];
    var day4 = [];
    var day5 = [];


// function for displaying 5 day forecast
    function displayForecastWeather() {
        event.preventDefault();
        if (storedData.city.length === 0) {
            var city = $("#cityInput").val();
            storeCityArray();
        } else {
            var city = localStorage.getItem('city')
            console.log('in if statement', city)
        }
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=21fbf76c114d375ae6d63681a9744c5a";
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
        })
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
        var city1 = localStorage.getItem('city');
        storedData.city.push(city1);
    }
    


// creating new buttons
    function newBtn() {
        var btnDiv = $("#searchBtn1").removeClass("w3-hide");
        btnDiv.text("")
        btnDiv.html(localStorage.getItem('city'))
    }
    newBtn();

// function for displaying data from api response onto the page
    function showMainDay() {
        $("#date1").html(day1[0].dt_txt);
        console.log(day1[0].main.feels_like)
        $("#spanContainer").text("Feels like: " + day1[0].main.feels_like + " Temp: " + day1[0].main.temp);
        $("#wind1").text(day1[0].wind.speed + " mph");
        $("#desc1").text(day1[0].weather.description);
        $("#uv1").text();
        $("#uvImg1").text();
    }


// onclick for searching the weather/storing the searched term into the localStorage/cityArr
    $("#searchBtn").on("click", function () {
        event.preventDefault();
        bringCityArray();
        storeCityArray();
        displayForecastWeather();
        showWeather();
        console.log(day1, "main search BTN ")
        showMainDay();
    });


// added search btn
    $("#searchBtn1").on('click', function () {
        event.preventDefault();
        bringCityArray();
        storeCityArray();
        displayForecastWeather();
        showWeather();
        console.log(day1, "searchBtn1")
        showMainDay();

    }) 

});