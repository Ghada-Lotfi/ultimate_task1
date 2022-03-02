const request = require('request'); 
var API_KEY = '5337e56560bc910bf077308486a29e33'; 
  
const forecast = function (city) { 
  
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  
    request({ url: url, json: true }, function (error, response) { 
        if (error) { 
            console.log('Unable to connect to Forecast API'); 
       		 } 
				
          else { 
			  try{
		var test = response;
	//	console.log(response.body.main);
		var temp = response.body.main.temp 
		var new1 = response.body.main.humidity
		var obj = {"name: temperature" : "value:" + temp }
		var obj2 = {"name: humidity" : "value:" + new1 }
		var s = JSON.stringify(obj)
		var s2 = JSON.stringify(obj2)
		var output = JSON.parse(s)
		var output2 = JSON.parse(s2)

            	console.log(response.body.main.humidity); console.log(output2); 
  
           	return output2;
       		 
			}
			catch(error){
				console.log("ERROR")
			}
		}
    	}) 
} 


const prompt = require("prompt-sync")({ sigint: true });
const country = prompt("Country? ");
const input = prompt("City? ");
// Function call 
forecast(input);
