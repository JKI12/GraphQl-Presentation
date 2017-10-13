import React from 'react';
import Codeblock from 'react-uikit-codeblock';

export default (props) => {
  return (
    <div className="slide slide-eight">
      <div className="content">
        <p>Now we can write in the schema a query that will return all the movies in our DB</p>
        <p>You add this to the same schema following this pattern:</p>
        <Codeblock>
        {
`type Query {
    allMovies: [Movie!]!
}`
        }
        </Codeblock>
        <p>Defining this works like this<code>ResolverName : ReturnType</code> and again the '!' means it cannot be null and the <code>[]</code> means it will return a list</p>
        <p>But now you're thinking WTF is a resolver?</p>
        <img src="https://media.giphy.com/media/tJeGZumxDB01q/giphy.gif" />
      </div>
    </div>
  );
};  