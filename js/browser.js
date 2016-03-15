var lookUp = require('./../js/lookup.js').lookUp;

$(document).ready(function(){
  $('#username').submit(function(){
  	event.preventDefault();
  	var userName = $('#username').val();
  	var newUser = new lookUp(username);
  	$('#showUser').append("test");
  });
});