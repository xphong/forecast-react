'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var WeatherReactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WeatherReactApp = require('WeatherReactApp');
    component = React.createElement(WeatherReactApp);
  });

  it('should create a new instance of WeatherReactApp', function () {
    expect(component).toBeDefined();
  });
});
