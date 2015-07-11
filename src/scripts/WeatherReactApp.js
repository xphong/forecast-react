'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Weather = require('./components/Weather');

// CSS
require('../styles/normalize.css');
require('../styles/main.css');

var WeatherReactApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
          <ReactTransitionGroup transitionName="fade">
              <Weather />
          </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<WeatherReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = WeatherReactApp;
