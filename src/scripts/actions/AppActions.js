'use strict';

var Api = require('../utils/Api');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/weather';
var apiKey = '0f39b39c55f9f764c41360fbe41282b7';
var apiOptions = '&mode=json&units=metric&appid=' + apiKey;

var AppActions = {
  searchWeather: function(city) {
    var url = apiBaseUrl + '?q=' + city + apiOptions;

    Api.get(url)
      .then(function (data) {
        AppDispatcher.handleViewAction({
          actionType: AppConstants.SEARCH_WEATHER,
          weather: data
        });
      });
  }
};

module.exports = AppActions;
