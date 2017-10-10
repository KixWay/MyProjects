var movies = require('./movies');
var macysMovies = movies();
macysMovies.favMovie = "The Notebook";
console.log("Macy's favorite movie is: " + macysMovies.favMovie);