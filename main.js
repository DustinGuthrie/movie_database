var $ = require('jquery');
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieCollectionView');

$(function () {
  var movieCollection = new MovieCollection();
  // console.log("the hell");
  movieCollection.fetch().then(function (data) {
    // console.log("these are the movies: ", movies);
    new MovieCollectionView({collection: movieCollection});
  });
});
