var Backbone = require('backbone');
var _ = require('underscore');
var MovieModel = require('./movieModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/Dustin_movieList',
  initialize: function () {
    // console.log(this.url());
  },
  model: MovieModel
});
