var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
  searchWeather: function(item) {
    AppDispatcher.handleViewAction({
      actionType: 'SEARCH_WEATHER',
      item: item
    })
  }
};

module.exports = AppActions;