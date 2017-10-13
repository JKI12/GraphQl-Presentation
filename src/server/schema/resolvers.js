import { getAllMovies, getMovie, getMovieByName, addMovie } from '../services/movies';
import { getAllActors, getActor, addActor } from '../services/actors';

export default {
  Query: {
    allMovies: () => getAllMovies(),
    movieById: (obj, { id }) => getMovie(id),
    movieByTitle: (obj, { title }) => getMovieByName(title),
    allActors: () => getAllActors(),
    actorById: (obj, { id }) => getActor(id)
  },
  Mutation: {
    addActor: (obj, { actor, movieId }) => addActor(actor, movieId),
    addMovie: (obj, { movie }) => addMovie(movie)
  }
};
