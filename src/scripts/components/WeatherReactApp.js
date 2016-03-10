'use strict';

var React = require('react');
var WeatherHeader = require('./WeatherHeader');
var WeatherSearch = require('./WeatherSearch');
var Weather = require('./Weather');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');
require('../../styles/weather.scss');

var WeatherReactApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <WeatherHeader />
        <WeatherSearch />
        <Weather />
      </div>
    );
  }
});

module.exports = WeatherReactApp;
