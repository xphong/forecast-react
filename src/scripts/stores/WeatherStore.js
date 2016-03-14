'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _WeatherForecast = {
  summary: 0,
  temperature: 0,
  humidity: 0,
  pressure: 0
};

function _retrieveWeather(weather) {
  _WeatherForecast = {
    summary: weather.weather[0].main,
    temperature: weather.main.temp,
    humidity: weather.main.humidity,
    pressure: weather.main.pressure
  };
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getWeatherForecast: function() {
    return _WeatherForecast;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_WEATHER:
      _retrieveWeather(payload.action.weather);
      break;
  }

  AppStore.emitChange();

  return true;
});

module.exports = AppStore;
