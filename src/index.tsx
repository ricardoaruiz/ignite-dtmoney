import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'styles/GlobalStyles';
import { App } from './App';

import './mock-api/server';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
