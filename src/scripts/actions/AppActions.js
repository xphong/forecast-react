'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
  searchWeather: function(city) {
    AppDispatcher.handleViewAction({
      actionType: 'SEARCH_WEATHER',
      city: city
    });
  }
};

module.exports = AppActions;