$(document).ready(function () {
    let storedData = {};
    let cityArr = [];
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
            console.log(response)
            
	// making weather cards
            let nameOf = response.city.name;
            for (i = 0; i < 40; i = i + 8) {
                let windSpeed = response.list[i].wind.speed + "mph";
                let cardRow = $('<div class="w3-row-padding w3-padding-16 w3-center" id="mainWeather">');
                let cardDiv = $('<div id="1">');
                cardRow.html(cardDiv);
                let img = $('<img id="2">');
                $("#1").html(img);
                let br1 = $('<br id="3">');
                $("#2").append(br1);
                let cityDiv = $('<div id="4">');
                let windSpan = $('<h3 id="9">').html('Wind Speed : ' + windSpeed);
                let citySpan = $('<h3 id="5">').text(nameOf);
                $("#3").html(windSpan);
                $("#4").html(citySpan);
                let dateDiv = $('<div id="6">');
                $("#5").html(dateDiv);
                let date = response.list[i].dt_txt;
                let dateSpan = $('<h4 id="7">' + date);
                $("#6").appendTo(dateSpan);
                let windDiv = $('<div id="8">');
                $("#7").html(windDiv);
                
                $("#8").html(windSpan);
                let uvDiv = $('<div id="10"> ');
                $("#9").html(uvDiv);
                $("#3").html(windSpan);
                // need to find the uvInfo might be seperate ajax call or url
                // let uvSpan = $('h3 class="w3-large w3-padding">').html('Uv Index : ' + uvInfo);
                let uvImgDiv = $('<div id="11" class="w3-container w3-padding">');
                $("#10").html(uvImgDiv);
                let uvImg = $('<img id="uvImg" alt="uv Index Picture">');
                $("#11").html(uvImg);
                // look up icon meaning and set imgs to that, then can catenate the .jpg or w/e on the end of the src
                let weatherIconData = response.list[i].weather[0].icon;
                console.log(weatherIconData);
            };
        });
    };
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