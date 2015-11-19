var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/Dustin_movieList',
  idAttribute: '_id',
  defaults: function () {
    return {
    photo: 'http://static.rogerebert.com/uploads/review/primary_image/reviews/spotlight-2015/hero_Spotlight-2015-3.jpg',
    title: "Spotlight",
    rating: "3.5",
    release: "November 5, 2015",
    plot: "On January 6, 2002, Boston Globe subscribers picked up their local paper and saw the front page headline: Church Allowed Abuse by Priest for Years.  The story, written by Michael Rezendes, a reporter on the investigative Spotlight team, was massive, in word-count and impact, but it was just the beginning. Two more Spotlight stories on the same topic ran that day, with more to follow. The uproar from the Spotlight stories (The Boston Phoenix, an alternative weekly, had covered church sexual abuse but it didn't have the circulation of the Globe) was so sustained that by December 2002, Cardinal Bernard Law, the Archbishop of Boston, stepped down in disgrace, saying in a statement, To all those who have suffered from my shortcomings and mistakes I both apologize and from them beg forgiveness. Pope John Paul II gave him a position in Rome, where Law remains to this day.) The Spotlight team won a Pulitzer Prize in 2003 for their reporting. These events are familiar to everyone by now, but those first Spotlight stories are painfully familiar to Boston Catholics (my family is Boston Irish-Catholic), and it was the first news story to dominate everyones conversations since September 11th only a few months prior."
    };
  },
  initialize: function () {
    // console.log("FROM MODEL");
  }
});
