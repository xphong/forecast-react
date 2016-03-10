'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./Weather');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var WeatherReactApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Weather />
      </div>
    );
  }
});

module.exports = WeatherReactApp;
