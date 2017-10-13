import { actors, movies } from '../data/index'
import { getAllMovies } from '../services/movies'
import { UserError } from 'graphql-errors';

export const getAllActors = () => {
  const result = [];
  
  for (const id in actors) {
    if (actors.hasOwnProperty(id)) {
      const actor = actors[id];
      
      result.push({
        id,
        ...actor,
        movies: getActorMovies(id)
      });
    }
  }

  return result;
}

export const getActor = (id) => {
  const actor = actors[id];
  return {
    id,
    ...actor,
    movies: getActorMovies(id)
  };
};

export const getActorMovies = (aId) => {
  const result = [];
  for (const id in movies) {
    if (movies.hasOwnProperty(id)) {
      const movie = movies[id];

      if (movie.actorIds.includes(aId)) {
        result.push({
          id,
          ...movie
        });
      }
    }
  }
  return result;
};

export const addActor = (actor, movieId) => {
  if (movies[movieId]) {
    const next = Object.keys(actors).length + 1;
    
    actors[next] = {
      ...actor
    };
  
    movies[movieId].actorIds.push(next);

    return { id: next, ...actors[next] };
  }

  throw new UserError(`Movie with id: ${movieId} does not exist`);
};
