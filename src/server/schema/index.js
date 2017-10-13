import  { makeExecutableSchema } from 'graphql-tools';
import { maskErrors } from 'graphql-errors';

import resolvers from './resolvers';

const typeDefs = `
  # This is object containing the movie information
  type Movie {
    id: ID!
    title: String!
    summary: String
    score: String
    actors: [Actor]
  }

  # This is object containing the actors information
  type Actor {
    id: ID!
    name: String!
    age: Int!
    movies: [Movie!]!
  }

  input MovieInput {
    title: String!
    summary: String
    score: String
    actors: [ActorInput]
  }

  input ActorInput {
    name: String!
    age: Int!
  }

  type Query {
    allMovies: [Movie!]!
    movieById(id: Int!): Movie!
    movieByTitle(title: String!): Movie!
    allActors: [Actor!]!
    actorById(id: Int!): Actor!
  }

  type Mutation {
    # Add a new actor to a movie
    addActor(actor: ActorInput, movieId: Int!): Actor
    # Add a new movie
    addMovie(movie: MovieInput): Movie
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers});