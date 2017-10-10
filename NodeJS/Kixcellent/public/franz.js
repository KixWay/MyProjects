var movies = require('./movies');
var franzsMovies = movies();
franzsMovies.favMovie = "Goodwill Hunting";
console.log("Franz's favorite movie is: " + franzsMovies.favMovie);