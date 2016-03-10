'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/Weather');

// CSS
require('../styles/normalize.css');
require('../styles/main.css');

var WeatherReactApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Weather />
      </div>
    );
  }
});
ReactDOM.render(<WeatherReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = WeatherReactApp;
