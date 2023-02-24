var searchBtn = $("#search-button");
var searchInput = $("#search-input");
var search = $("#search");
var history = $("#city-history");
var city = $("#city");
var storage = [];
var forecast = $("#forecast");
var apiKey = "576ba9de0baafed44bf4ca4ee88bc12f";
var websiteURl = "https://openweathermap.org";

//search for a city and get input
function onSearchClick(event) {
  event.preventDefault();
  var citySearch = searchInput.val();
  getWeather(citySearch);
}
function updateHistory(searchCity) {
  // store city in local storage
  city = [];
  if (!localStorage.getItem("city"))
    localStorage.setItem("city", JSON.stringify(city));
  var name = localStorage.getItem("city");
  city = JSON.parse(name);
  if (!city.find((x) => x === citySearch)) {
    city.push(citySearch);
  }
  localStorage.setItem("city", JSON.stringify(city));
}
