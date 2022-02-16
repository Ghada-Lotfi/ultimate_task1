const request = require('request'); 
var API_KEY = '67b39c74787d3337d69f76fd02d907bb'; 
  
const forecast = function (city) { 
  
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  
    request({ url: url, json: true }, function (error, response) { 
        if (error) { 
            console.log('Unable to connect to Forecast API'); 
        } 
          else { 

		var temp = response.body.main.temp 

		var obj = {"name: temperature" : "value:" + temp }
		var s = JSON.stringify(obj)
		var output = JSON.parse(s)

  
            console.log(
                response.body.main.temp

            ); 
  
           return output;
        } 
    }) 
} 

const prompt = require("prompt-sync")({ sigint: true });
const country = prompt("Country? ");
const input = prompt("City? ");
//console.log(`${input}`);

var city = input;
console.log(city);

// Function call 
forecast(city);

