
// function to run ajax for 5 day forecast 


function weatherforecast (){

// defining "city" by grabbing the value inside of the city-search input field 
    var city = $("#city-search").val().trim(); 

    APIkey= "&appid=50e4e8365fe4f17332078756e2e4d29b"; 
    var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + APIkey;

    $.ajax({
         url: queryURL,
         method: "GET"         
     }).then(function(response) {
    
    //    console.log(response);


    var card1 = $("#card1");

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var p = $("<p>").text(tomorrow);
    card1.append(p);

// path to get icon code 
        var iconcode1 = (response.list[0].weather[0].icon);
// path for img src 
        var iconurl = "http://openweathermap.org/img/wn/" + iconcode1 + ".png";
// creating an img tag 
        var img1 = $("<img>");
// setting img attr - src to iconurl
        img1.attr("src", iconurl);
// appending img 1 to my card 1
        card1.append(img1);
        
        // console.log(response.list[0].weather[0]);

        console.log(response.list[0].weather[0].icon);

    });

};


// function to run ajax call for current weather 
function currentweather () {

    var city = $("#city-search").val().trim(); 
    APIkey= "&appid=50e4e8365fe4f17332078756e2e4d29b"; 
    var querycurrentURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + APIkey;

    $.ajax({
        url: querycurrentURL,
        method: "GET"
    }).then(function(response){
            
// var to append to later 
        var weatherdiv = $("#display-weather");
        var cityname = (response.name);
// current date in mm/dd/yyy format 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; 
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        today = month + "/" + day + "/" + year;
// for city name and current date 
        var cityDisplay = $("<h3>").text(cityname +" "+ today); 
// appending to my weather div
        weatherdiv.append(cityDisplay);
// for temperature
        var temp= (response.main.temp);
        var tempdisplay = $("<p>").text("Temperature:" + " " + temp + "°F");
        weatherdiv.append(tempdisplay);
// for humidity 
        var humidity = (response.main.humidity);
        var humiditydisplay = $("<p>").text("Humidity:" + " " + humidity + "%");
        weatherdiv.append(humiditydisplay);
// for wind speed 
        var windspeed = (response.wind.speed);
        var winddisplay = $("<p>").text("Wind Speed:" + " " + windspeed + "MPH");
        weatherdiv.append(winddisplay);           
    });

};

// when the search button is clicked, my functions are run in order to use the weather API's, the user input prepends to a list

$(".button").on("click", function(event){
    event.preventDefault(); 
    $("#display-weather").empty(); 
    weatherforecast(); 
    currentweather(); 

    var div = $("<div>");
    div.attr("data-name", citychoice);
    var cityDiv = $(".citydisplay");
    cityDiv.append(div); 

    var citychoice = $("#city-search").val().trim(); 
    div.prepend(citychoice); 
});


