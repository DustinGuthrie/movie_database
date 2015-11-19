var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./template');
var MovieModel = require('./movieModel');

module.exports = Backbone.View.extend({
  className: 'addMovie',
  model: null,
  events: {
    'submit form': 'addMovie',
    'click .remove':  'onDeleteClick',
  },
  addMovie: function (event) {
    console.log("HELLO");
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      photo: this.$el.find('input[name="photo"]').val(),
      rating: this.$el.find('input[name="rating"]').val(),
      release: this.$el.find('input[name="release"]').val(),
      plot: this.$el.find('input[name="plot"]').val(),
    };
    // var newModel = new MovieModel(newMovie);
    this.model.set(newMovie);
    newModel.save();
    // this.collection.add(newModel);
    // this.createOne(newModel);
    this.$el.find('input').val('');
  },
  onDeleteClick: function (){
    event.preventDefault();
    this.model.destroy();
    this.$el.remove();
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // console.log(markup);
    return this;
  },
});
