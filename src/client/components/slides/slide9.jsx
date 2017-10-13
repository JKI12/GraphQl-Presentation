import React from 'react';
import Codeblock from 'react-uikit-codeblock';

export default (props) => {
  return (
    <div className="slide slide-nine">
      <div className="content">
        <p>Resolvers are what the schema maps to retrieve your data</p>
        <p>These are (in my case) another object in JS that has the properties of the names specified in the schema</p>
        <p>So for example</p>
        <Codeblock>
        {
`type Query {
    allMovies: [Movie!]!
}
`
        }
        </Codeblock>
        <p>Inside the resolver can acquaint to</p>
        <Codeblock>
          {
`export default {
  Query: {
    allMovies: () => getAllMovies(),
  }
}
`
          }
        </Codeblock>
        <p>This essentially means: <code>QueryPropName : FunctionToCall</code></p>
        <p>Inside the function called is what goes off and gets your data and returns it in the schema stated above, now just like rest you will return the whole object but as mentioned GraphQL decides what to send to the client</p>
      </div>
    </div>
  );
};  