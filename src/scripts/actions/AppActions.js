'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchWeather: function(city) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_WEATHER,
      city: city
    });
  }
};

module.exports = AppActions;
