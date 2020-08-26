// setting variables from html
var iconElement = document.querySelector(".card-img-top")
var tempElement = document.querySelector(".temperature p") 
var descElement = document.querySelector(".temperature-description p")
var locationElement = document.querySelector(".city-state p")
var dateOf = document.querySelector(".dateOf p")


// Creating Weather Object
// const weather = {
// 	temperature: {
// 		value: 18,
// 		unit: "celsius"
// 	},
// 	description: "few clouds",
// 	iconId: "01d",
// 	city: "London",
// 	country: "GB",
// };


// This button will call the searched city through an AJAX Call to openweathermap.org
$("#button").on("click", function (event) {
	event.preventDefault();
	var city = document.querySelector("#city").val();
	var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=aadef2e30a8efe5bb715019df5f2a42a"

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response)
		$(".weatherCard").text(JSON.stringify(response))
	})
})




