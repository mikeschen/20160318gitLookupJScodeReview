!function n(e,t,o){function i(u,a){if(!t[u]){if(!e[u]){var p="function"==typeof require&&require;if(!a&&p)return p(u,!0);if(r)return r(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[u]={exports:{}};e[u][0].call(f.exports,function(n){var t=e[u][1][n];return i(t?t:n)},f,f.exports,n,e,t,o)}return t[u].exports}for(var r="function"==typeof require&&require,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(n,e,t){t.pingPong=function(n){for(var e=[],t=1;n>=t;t++)t%15===0?e.push("ping-pong"):t%3===0?e.push("ping"):t%5===0?e.push("pong"):e.push(t);return e}},{}],2:[function(n,e,t){var o=n("./../js/ping-pong.js").pingPong;$(document).ready(function(){$("#ping-pong").submit(function(n){n.preventDefault();var e=$("#goal").val(),t=o(e);t.forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var e=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+e+" has been received</p>")})}),$(document).ready(function(){$("#time").text(moment())});var i="6dbfb1db59dc2b72dd48a4829420f794";$(document).ready(function(){$("#weatherLocation").click(function(){var n=$("#location").val();$("#location").val(""),$.get("http://api.openweathermap.org/data/2.5/weather?q="+n+"&appid="+i,function(e){200!=e.cod?$(".showWeather").text(e.message):$(".showWeather").text("The humidity in "+n+" is "+e.main.humidity+"%")})})})},{"./../js/ping-pong.js":1}]},{},[2]);