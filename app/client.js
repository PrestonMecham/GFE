import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
require('./index.scss');

render(
  <App />,
  document.getElementById('app')
);
