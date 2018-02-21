'use strict';

var izi = function() {
  
}

/* getCityData takes in the city and the apikey
getCityData returns the api data for a city */
izi.prototype.cityData = function (city, key) {
  var url = 'https://cors-anywhere.herokuapp.com/https://api.izi.travel/mtg/objects/search?languages=en,ru&includes=translations&type=city&query=' + city;
  return fetch(url, {
    headers: {
      "X-IZI-API-KEY": key
    }
  })
  .then(response => response.json()) // parses response to JSON
}

izi.prototype.museumData = function (cityUuid, key) {
  var url = 'https://cors-anywhere.herokuapp.com/https://api.izi.travel/cities/' + cityUuid + '/children?languages=en&type=museum';
  return fetch(url, {
    headers: {
      "X-IZI-API-KEY": key
    }
  })
  .then(response => response.json()) // parses response to JSON
}

var iziApi = new izi();

module.exports = iziApi;
  





