import React from 'react';
import GraphQl from '../graphiql';

const query = 'query {\r\n  allMovies {\r\n    title\r\n    score\r\n  }\r\n}';

export default (props) => {
  return (
    <div className="slide slide-ten">
      <div className="content">
        <h3>Patching it together</h3>
        <p>Now running the application the GraphQl schema will used when hitting the GraphQl endpoint</p>
        <p>Which results in:</p>
        <GraphQl query={query} readOnly />
      </div>
    </div>
  );
};  