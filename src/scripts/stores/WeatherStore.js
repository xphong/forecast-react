var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _WeatherForecast = [];

function _searchWeather(city) {
  console.log(city);
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getWeatherForecast: function() {
    return _WeatherForecast;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case 'SEARCH_WEATHER':
        _searchWeather(payload.action.city);
        break;
    }

    AppStore.emitChange();

    return true;
  })

})

module.exports = AppStore;