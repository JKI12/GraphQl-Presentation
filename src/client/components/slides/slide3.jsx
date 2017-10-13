import React from 'react';
import Codeblock from 'react-uikit-codeblock';

export default (props) => {
  return (
    <div className="slide slide-three">
      <div className="content">
        <div className="left">
          <p>GraphQL is built on the promise of only requesting the data you need there and then</p>
          <p>So as for a rest query you could request let's say Topics - typically you would do something like GET: /topic/1</p>
          <p>This would return something like -></p>
          <p>But this can be a lot of information to send to the client that might not be necessary</p>
          <p>If they haven't got Sky Mobile 5Gb data the cost of these requests could eat their data up</p>
        </div>

        <div className="right">
          <Codeblock>
            {
              `[{
  "Id": 655,
  "Category": "blt7c9fc394eaac3d3c",
  "Summary": "Whales 🐳",
  "Description": "Splish, Splash, Splosh",
  "CreatedBy": "Some Bloke",
  "CreatedDate": "2017-10-12T16:27:01.433Z",
  "ModifiedDate": "2017-10-12T16:27:01.433Z",
  "Anonymous": true,
  "Answer": null,
  "AnswerDate": null,
  "AnswerBy": null,
  "AnswerByImage": null
}]`
            }
          </Codeblock>
        </div>
      </div>
    </div>
  );
};  