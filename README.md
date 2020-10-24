# weather-application

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast

In my weather application, I used 2 API's from openweathermap.org. I used the current weather data and the 5day/3 hour forecast API's. In javascript, I created 2 ajax calls for each of my API's and dynamically appended content to my HTML using JQuery. 

When you type a city into the search bar, it prepends beneath the button to show the most recently searched city first, and then lists out the other searched cities. When a city is searched, it is pulled into my "city" variable in JS, which is inserted in my ajax URL. This ensures that the proper data is showing on the page. 