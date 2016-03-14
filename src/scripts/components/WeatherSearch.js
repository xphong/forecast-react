'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions');

var WeatherSearch = React.createClass({
  getInitialState: function () {
    return {
      city: ''
    };
  },
  handleSubmit: function (event) {
    event.preventDefault();
    AppActions.searchWeather(this.state.city);
  },
  handleChange: function (event) {
    this.setState({
      city: event.target.value
    });
  },
  render: function () {
    return (
      <form className="weather__search" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="City" onChange={this.handleChange} required />
        <button type="submit">Search</button>
      </form>
    );
  }
});

module.exports = WeatherSearch;
