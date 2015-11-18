var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./movieModelView');


//initial load here

module.exports = Backbone.View.extend({
  el: '.swap',
  events: {
    // 'click .post': 'createOne',
    'submit form': 'submitForm',
  },

  submitForm: function () {
    var newMovie = {
      title: this.$el.find('input[type="title"]').val(),
      photo: this.$el.find('input[type="photo"]').val(),
      rating: this.$el.find('input[type="rating"]').val(),
      release: this.$el.find('input[type="release"]').val(),
      plot: this.$el.find('input[type="plot"]').val(),
    };
    var newModel = new MovieModel(newMovie);
    newModel.save();
    this.collection.add(newModel);
    this.createOne(newModel);
  },

  initialize: function () {

    this.addAll();
  },
  createOne: function (movieModel) {
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.createOne, this);

  }
});
