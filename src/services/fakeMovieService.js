import * as genresAPI from "./fakeGenreService";

const movies = [
 
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    like:false
  },
 
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 4.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like:false
  },
 
  {
    _id: "5b21ca3eeb7f6fbccd471829",
    title: "Madagascar",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 4.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471835",
    title: "Ice Age",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471845",
    title: "Coralin",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 5.5,
    dailyRentalRate: 2,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471855",
    title: "John Wick",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 8.5,
    dailyRentalRate: 5.75,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471865",
    title: "Good Night",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 6.5,
    dailyRentalRate: 3.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    title: "James Bond",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471875",
    title: "Lights Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 9,
    dailyRentalRate: 4.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd473825",
    title: "Tourist",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 9,
    dailyRentalRate: 8.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471625",
    title: "Call Me Daddy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 2,
    dailyRentalRate: 5.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd475825",
    title: "Black Adam",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 9.5,
    dailyRentalRate: 4.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471895",
    title: "Counguring",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 6.5,
    dailyRentalRate: 4.25,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd472825",
    title: "Mission Impossible",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 7,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd432825",
    title: "Woman King",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7.5,
    dailyRentalRate: 7,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd493825",
    title: "Top Gun",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 4,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd542825",
    title: "Bullet Train",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 7.5,
    like:false
  },
  {
    _id: "5b21ca3eeb7f6fbccd672825",
    title: "Sherlook Holmes",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 9,
    dailyRentalRate: 7.75,
    like:false
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
