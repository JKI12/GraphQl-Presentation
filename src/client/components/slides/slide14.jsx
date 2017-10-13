import React from 'react';
import GraphQl from '../graphiql';
import schema from '../../../server/schema';

const query = '{\r\n\t\t__schema {\r\n      types {\r\n        name\r\n        fields {\r\n          name\r\n          args {\r\n            name\r\n          }\r\n        }\r\n      }\r\n    }\r\n}';

export default () => {
  return (
      <div className="slide slide-fourteen">
        <div className="graph">
          <GraphQl onFocus={() => {document.onkeydown = null}} readonly={false} query="" sendBtn schema={schema} query={query} />
          <div className="links">
            <p>Right and Left have been disabled here use these links to navigate. We have started off with listing the schema above</p>
            <a href="/13">Back</a>
            <a href="/">End</a>
          </div>
        </div>
      </div>
    );
}