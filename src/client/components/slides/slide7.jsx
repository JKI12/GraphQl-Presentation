import React from 'react';
import Codeblock from 'react-uikit-codeblock';

export default (props) => {
  return (
    <div className="slide slide-seven">
      <div className="content">
        <p>I am first going to write my schema, now im using <code>grapql-tools</code> to help me generate this schema</p>
        <p>A schema defines the types that can be sent back, the queries that can be made, mutations that can be made and other functions within graphql</p>
        <p>You can also describe the objects using hashes and this will appear on the documentation</p>
        <Codeblock>
          {
`# This is object containing the movie information
  type Movie {
    id: ID!
    title: String!
    summary: String
    score: String
    actors: [Actor]
  }`
          }
        </Codeblock>
        <p>Defining a schema essentially works like this <code>PropName : Type</code> and a '!' means if its nullable or not</p>
        <p>We have also referred to another type <code>Actor</code> and its surrounded in <code>[]</code> which means its a list of them, we can then define this later in the schema</p>
      </div>
    </div>
  );
};  