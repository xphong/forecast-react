'use strict';

var React = require('react');

var WeatherHeader = React.createClass({
  render: function () {
    return (
      <h1 className="weather__header">Weather</h1>
    );
  }
});

module.exports = WeatherHeader;
