var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('./formView');
var MovieView = require('./movieCollectionView');
var MovieCollection = require('./MovieCollection');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function () {
    var self = this;
    var headerHTML = new HeaderView();
    var footerHTML = new FooterView();
    var formHTML = new FormView();
    var movieCollection = new MovieCollection();
    movieCollection.fetch().then(function () {
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('footer').html(footerHTML.render().el);
      // self.$el.find('swap').html(formHTML.render().el);
    });
  }

});
