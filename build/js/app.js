(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./lookup.js":2}],2:[function(require,module,exports){
exports.lookUp = function(username) {
  this.username = username;
};

Query.prototype.usernameURL = function () {
  return 'https://api.github.com/users/' + this.username;
};
},{}]},{},[1]);
