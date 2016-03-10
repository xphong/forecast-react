'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

function convertToCelsius(temperature) {
    return Math.round((temperature - 32) * 5/9);
}

var Weather = React.createClass({
    getInitialState: function() {
        return {
            weather: {}
        };
    },
    componentDidMount: function() {
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude.toFixed(2),
                longitude = position.coords.longitude.toFixed(2),
                url = 'https://api.forecast.io/forecast/18945bdacf82d7a89e4a7b051d1475e9/' + latitude + ',' + longitude,
                PERCENTMULTIPLIER = 100;

            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function (data) {
                    if (this.isMounted()) {
                        var state = this.state;
                        state.weather = {
                            summary: data.currently.summary,
                            temperature: convertToCelsius(data.currently.temperature),
                            humidity: data.currently.humidity * PERCENTMULTIPLIER,
                            pressure: data.currently.pressure
                        };
                        this.setState(state);
                    }
                }.bind(this)
            });
        }.bind(this));
    },
    render: function () {
        return (
            <div className="weather">
                <h1 className="weather__header">Weather</h1>
                <div className="weather__container">
                    <span className="weather__info--title">Forecast:</span>
                    <span className="weather__info--data">{this.state.weather.summary}</span>
                    <span className="weather__info--title">Temperature:</span>
                    <span className="weather__info--data">{this.state.weather.temperature}°C</span>
                    <span className="weather__info--title">Humidity:</span>
                    <span className="weather__info--data">{this.state.weather.humidity}%</span>
                    <span className="weather__info--title">Pressure:</span>
                    <span className="weather__info--data">{this.state.weather.pressure}%</span>
                </div>
            </div>
        );
    }
});

module.exports = Weather; 
