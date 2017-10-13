import React from 'react';
import GraphQl from '../graphiql';

const query = 'mutation {\r\n  addMovie(movie: {\r\n    title: \"Cat in the hat\"\r\n    score: \"10\"\r\n  }) {\r\n    id,\r\n    title\r\n  }\r\n}';

export default (props) => {
  return (
    <div className="slide slide-ten">
      <div className="content">
        <h3>Patching it together</h3>
        <p>Now running the application the GraphQl schema will used when hitting the GraphQl endpoint</p>
        <p>Which results in:</p>
        <GraphQl query={query} readOnly />
        <p>You are also able to define at the end of mutation what values you want to be returned pass, we are asking for: <code>id & title</code></p>
      </div>
    </div>
  );
};  