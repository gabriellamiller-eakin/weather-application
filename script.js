 
var city = "orlando"; 
APIkey= "&appid=50e4e8365fe4f17332078756e2e4d29b"; 
var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIkey;

$.ajax({
          url: queryURL,
          method: "GET"
          
        }).then(function(response) {

          console.log(response);
});

