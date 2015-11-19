var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;


//post single movie here
//upvoting here
//edit here
//delete here

module.exports = Backbone.View.extend({
  // el: '.row',
  // tagName: 'movieArticle',
  className: 'movieReview',
  template: _.template($('#movieTmpl').html()),
  events: {
    // 'click .post': 'onArticleClick',
    // 'click .post': 'onPostClick',
    'click .remove':  'onDeleteClick',

  },
  onPostClick: function () {
    alert('you clicked Post!');
  },
  onDeleteClick: function (){
    event.preventDefault();
    this.model.destroy();
    this.$el.remove();
  },

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // console.log(markup);
    return this;
  },
  initialize: function () {}

});
