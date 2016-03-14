'use strict';

require('whatwg-fetch');
var Promise = require('es6-promise').Promise; // jshint ignore:line

var Api = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then(function (res) {
          resolve(res.json());
        })
        .catch(function (err) {
          reject(err);
        });
    });
  }
};

module.exports = Api;