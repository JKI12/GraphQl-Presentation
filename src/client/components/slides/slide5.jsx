import React from 'react';
import Codeblock from 'react-uikit-codeblock';

export default (props) => {
  return (
    <div className="slide slide-five">
      <div className="content">
        <div className="left">
          <h2>Querying</h2>
          <p>GraphQl (being a guideline) has a library for most languages including: Node, .NET-Core and Java</p>
          <p>As mentioned GraphQl is a querying language and when requesting you can ask for only the properties you need:</p>
          <Codeblock>
            {
`query {
  topics {
    Summary
    Description
    CreatedBy
  }
}`
            }
          </Codeblock>
        </div>

        <div className="right">
            <p>So you could query your server for exactly what you need and therefore not over-fetching</p>
            <p>GraphQl handles what data is sent back on the server side and the response could look like this:</p>
            <Codeblock>
            {
`{
  "data": {
    "topics": [
      {
        "Summary": "Whales 🐳",
        "Description: "Splish, Splash, Splosh",
        "CreatedBy": "Some Bloke"
      }
    ]
  }
}`
            }
          </Codeblock>
        </div>
      </div>
    </div>
  );
};  