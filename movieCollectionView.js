var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./movieModelView');
var MovieModel = require('./movieModel');


//initial load here

module.exports = Backbone.View.extend({
  el: '.swap',
  events: {
    // 'click .post': 'createOne',
    'submit form': 'submitForm',
  },
  initialize: function () {
    // console.log("HELLO PLEASE");
    this.addAll();
  },

  createOne: function (movieModel) {
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.createOne, this);
  },
  submitForm: function (event) {
    console.log("HELLO");
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      photo: this.$el.find('input[name="photo"]').val(),
      rating: this.$el.find('input[name="rating"]').val(),
      release: this.$el.find('input[name="release"]').val(),
      plot: this.$el.find('input[name="plot"]').val(),
    };
    var newModel = new MovieModel(newMovie);
    newModel.save();
    this.collection.add(newModel);
    this.createOne(newModel);
  }
});
