var lookUp = require('./../js/lookup.js').lookUp;

$(document).ready(function(){
  $('#finduser').submit(function(event){
  	event.preventDefault();
  	var userName = $('#username').val();
  	var newLookUp= new lookUp(username);
  	$('#showUser').append(newLookUp.usernameURL());
  });
});