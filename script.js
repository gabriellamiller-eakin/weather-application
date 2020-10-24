
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

// forecast for tomorrow 
    var card1 = $("#card1");
// tomorrow's date 
    var tomorrow= moment().add(1,'day').format('MM/DD/YYYY');
    var tom = $("<h4>").text(tomorrow);
    card1.append(tom);
// path to get icon code 
        var iconcode1 = (response.list[3].weather[0].icon);
// path for img src 
        var iconurl = "http://openweathermap.org/img/wn/" + iconcode1 + ".png";
// creating an img tag 
        var img1 = $("<img>");
// setting img attr - src to iconurl
        img1.attr("src", iconurl);
// appending img 1 to my card 1
        card1.append(img1);
// temp card for tomorrow 
        var temp=(response.list[3].main.temp); 
        var temptomorrow = $("<p>").text("Temp:" + temp + "°F");
        temptomorrow.addClass("tomorrowclass");
        card1.append(temptomorrow);
        var hum = (response.list[3].main.humidity);
        var humtomorrow = $("<p>").text("Humidity:" + hum + "%");
        humtomorrow.addClass("tomorrowclass");
        card1.append(humtomorrow);
        
        console.log(response);
// 2nd day forecast 
        var card2=$("#card2");
        // 2 day forecast
        var twoday= moment().add(2,'day').format('MM/DD/YYYY');
        var twodays = $("<h4>").text(twoday);
        card2.append(twodays);
// path to get icon code 
        var iconcode2 = (response.list[8].weather[0].icon);
// path for img src 
        var iconurl = "http://openweathermap.org/img/wn/" + iconcode2 + ".png";
// creating an img tag 
        var img2 = $("<img>");
// setting img attr - src to iconurl
        img2.attr("src", iconurl);
// appending img 1 to my card 1
        card2.append(img2);
// temp card for tomorrow 
        var temp2=(response.list[8].main.temp); 
        var temptwoday = $("<p>").text("Temp:" + temp2 + "°F");
        temptwoday.addClass("tomorrowclass");
        card2.append(temptwoday);
        var hum2 = (response.list[8].main.humidity);
        var humtwo = $("<p>").text("Humidity:" + hum2 + "%");
        humtwo.addClass("tomorrowclass");
        card2.append(humtwo);

// 3rd day forecast  

var card3=$("#card3");
        // 2 day forecast
        var threeday= moment().add(3,'day').format('MM/DD/YYYY');
        var threedays = $("<h4>").text(threeday);
        card3.append(threedays);
// path to get icon code 
        var iconcode3 = (response.list[18].weather[0].icon);
// path for img src 
        var iconurl = "http://openweathermap.org/img/wn/" + iconcode3 + ".png";
// creating an img tag 
        var img3 = $("<img>");
// setting img attr - src to iconurl
        img3.attr("src", iconurl);
// appending img 1 to my card 1
        card3.append(img3);
// temp card for tomorrow 
        var temp3=(response.list[18].main.temp); 
        var tempthreeday = $("<p>").text("Temp:" + temp3 + "°F");
        tempthreeday.addClass("tomorrowclass");
        card3.append(tempthreeday);
        var hum3 = (response.list[13].main.humidity);
        var humthree = $("<p>").text("Humidity:" + hum3 + "%");
        humthree.addClass("tomorrowclass");
        card3.append(humthree);

// 4th day forecast 
var card4=$("#card4");
        // 2 day forecast
        var fourday= moment().add(4,'day').format('MM/DD/YYYY');
        var fourdays = $("<h4>").text(fourday);
        card4.append(fourdays);
// path to get icon code 
        var iconcode4 = (response.list[24].weather[0].icon);
// path for img src 
        var iconurl = "http://openweathermap.org/img/wn/" + iconcode4 + ".png";
// creating an img tag 
        var img4 = $("<img>");
// setting img attr - src to iconurl
        img4.attr("src", iconurl);
// appending img 1 to my card 1
        card4.append(img4);
// temp card for tomorrow 
        var temp4=(response.list[24].main.temp); 
        var tempfourday = $("<p>").text("Temp:" + temp4 + "°F");
        tempfourday.addClass("tomorrowclass");
        card4.append(tempfourday);
        var hum4 = (response.list[24].main.humidity);
        var humfour = $("<p>").text("Humidity:" + hum4 + "%");
        humfour.addClass("tomorrowclass");
        card4.append(humfour);

// 5th day forecast 
var card5=$("#card5");
        // 2 day forecast
        var fiveday= moment().add(5,'day').format('MM/DD/YYYY');
        var fivedays = $("<h4>").text(fiveday);
        card5.append(fivedays);
// path to get icon code 
        var iconcode5 = (response.list[34].weather[0].icon);
// path for img src 
        var iconurl = "http://openweathermap.org/img/wn/" + iconcode5 + ".png";
// creating an img tag 
        var img5 = $("<img>");
// setting img attr - src to iconurl
        img5.attr("src", iconurl);
// appending img 1 to my card 1
        card5.append(img5);
// temp card for tomorrow 
        var temp5=(response.list[34].main.temp); 
        var tempfiveday = $("<p>").text("Temp:" + temp5 + "°F");
        tempfiveday.addClass("tomorrowclass");
        card5.append(tempfiveday);
        var hum5 = (response.list[34].main.humidity);
        var humfive = $("<p>").text("Humidity:" + hum5 + "%");
        humfive.addClass("tomorrowclass");
        card5.append(humfive);
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
    $("#card1").empty(); 
    $("#card2").empty(); 
    $("#card3").empty(); 
    $("#card4").empty(); 
    $("#card5").empty(); 
    weatherforecast(); 
    currentweather(); 

    var div = $("<div>");
    div.attr("data-name", citychoice);
    var cityDiv = $(".citydisplay");
    cityDiv.append(div); 

    var citychoice = $("#city-search").val().trim(); 
    div.prepend(citychoice); 
});


