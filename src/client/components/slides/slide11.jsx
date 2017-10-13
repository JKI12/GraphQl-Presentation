import React from 'react';
import Codeblock from 'react-uikit-codeblock';

export default (props) => {
  return (
    <div className="slide slide-eleven">
      <div className="content">
        <h3>Mutations</h3>
        <p>As mentioned in the previous slides mutations are a way of editing data</p>
        <p>Lets say I want to add a new movie to the database then I can write a mutator and a resolver to do this</p>
        <Codeblock>
        {
`type Mutation {
    # Add a new movie
    addMovie(movie: MovieInput): Movie
}`
        }
        </Codeblock>
        <p>Now as you can see we now have something within the <code>()</code> these just like normal programming are parameters and we expect the type to be something called <code>MovieInput</code></p>
        <p>This is a new definition we can add to the schema, this is defined the same way a <code>type</code> but instead is defined as an input</p>
        <Codeblock>
        {
`input MovieInput {
    title: String!
    summary: String
    score: String
}`
        }
        </Codeblock>
      </div>
    </div>
  );
};  