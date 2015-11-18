var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

//post single movie here
//upvoting here
//edit here
//delete here

module.exports = Backbone.View.extend({
  el: '.swap',
  // tagName: 'article',
  // className: 'photo',
  template: _.template($('#movieTmpl').html()),
  events: {
    // 'click .post': 'onArticleClick',
    'click .post': 'onPostClick',

  },
  onPostClick: function () {
    alert('you clicked Post!');
  },

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    console.log(markup);
    return this;
  },
  initialize: function () {}

});
