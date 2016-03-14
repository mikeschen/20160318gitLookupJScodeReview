var pingPong = require('./../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
$(document).ready(function(){
	$('#signup').submit(function(event){
		event.preventDefault();
		var email = $('#email').val();
		$('#signup').hide();
		$('#solution').prepend('<p>Thank you, ' + email + ' has been received</p>');
	});
});
$(document).ready(function(){
	$('#time').text(moment());
});
var apiKey = "6dbfb1db59dc2b72dd48a4829420f794";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    		if (response.cod != 200) {
    			$('.showWeather').text(response.message);
    		} else {
    			$('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    		}
    	});
    });
});