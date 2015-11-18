var Backbone = require('backbone');
var _ = require('underscore');
var MovieModel = require('./movieModel');

module.exports = Backbone.Collection.extend({
  url: function() {
    return 'http://tiy-fee-rest.herokuapp.com/collections/Dustin_movieList';
  },
  initialize: function () {
    console.log(this.url());
  },
  model: MovieModel
});
