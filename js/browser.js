var lookUp = require('./lookup.js').lookUp;

var apiKey = "6dbfb1db59dc2b72dd48a4829420f794";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
  	var city = $('#location').val();
  	$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
  				$('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
  	});
  });
});