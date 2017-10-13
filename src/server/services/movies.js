import { movies } from '../data';
import { getActor, addActor } from './actors';

export const getAllMovies = () => {
  const result = [];

  for (const id in movies) {
    if (movies.hasOwnProperty(id)) {
      const movie = movies[id];
      
      const actors = movie.actorIds.map((aId) => {
        return getActor(aId);
      });

      result.push({
        id,
        ...movie,
        actors
      });
    }
  }

  return result;
};

export const getMovie = (id) => {
  const movie = movies[id];

  if (!movie) {
    return {
      title: '',
      summary: '',
      score: '',
      actors: ''
    };
  }

  const actors = movie.actorIds.map((aId) => {
    return getActor(aId);
  });

  return {
    id,
    ...movie,
    actors
  };
};

export const getMovieByName = (name) => {
  let movie;

  for (const id in movies) {
    if (movies.hasOwnProperty(id)) {
      const mov = movies[id];

      if (mov.title.toLowerCase() === name.toLowerCase()) {
        movie = mov;
      }
    }
  }

  if (!movie) {
    return {
      title: '',
      summary: '',
      score: '',
      actors: ''
    };
  }

  const actors = movie.actorIds.map((aId) => {
    return getActor(aId);
  });

  return {
    ...movie,
    actors
  };
};

export const addMovie = (movie) => {
  const next = Object.keys(movies).length + 1;

  movies[next] = {
    ...movie,
    actorIds: []
  };

  const actors = [];

  if (movie.actors) {
    movie.actors.forEach((actor) => {
      actors.push(addActor(actor, next));
    }, this);
  }

  return {
    id: next,
    ...movie,
    ...actors
  };
};
