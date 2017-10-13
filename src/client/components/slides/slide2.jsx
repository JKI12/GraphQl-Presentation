import React from 'react';

export default (props) => {
  return (
    <div className="slide slide-two">
      <div className="content">
        <div className="left">
        <h3>GraphQl is:</h3>
          <ul>
            <li>A new standard for Api's developed by Facebook</li>
            <li>A more efficient alternative to REST</li>
          </ul>
        </div>

        <div className="right">
          <h3>GraphQl is a not:</h3>
          <ul>
            <li>Only for react</li>
            <li>A database query language</li>
            <li>About graphs 💹</li>
          </ul>
        </div>
      </div>
    </div>
  );
};  