'use strict';

var React = require('react');
var AppStore = require('../stores/WeatherStore');

var Weather = React.createClass({
    getInitialState: function() {
      return {
          weather: AppStore.getWeatherForecast()
      };
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
      this.setState({
        weather: AppStore.getWeatherForecast()
      });
    },
    render: function () {
        return (
          <div className="weather__container">
              <span className="weather__info--title">Forecast:</span>
              <span className="weather__info--data">{this.state.weather.summary}</span>
              <span className="weather__info--title">Temperature:</span>
              <span className="weather__info--data">{this.state.weather.temperature} °C</span>
              <span className="weather__info--title">Humidity:</span>
              <span className="weather__info--data">{this.state.weather.humidity} %</span>
              <span className="weather__info--title">Pressure:</span>
              <span className="weather__info--data">{this.state.weather.pressure} hpa</span>
          </div>
        );
    }
});

module.exports = Weather; 
