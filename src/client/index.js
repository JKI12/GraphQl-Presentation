import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

require('./styles/app.scss');

render(
  <App />,
  document.getElementById('root')
);
