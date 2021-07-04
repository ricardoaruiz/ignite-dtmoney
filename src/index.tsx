import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/themes/theme';
import { DtMoneyContextProvider } from 'contexts/DtMoneyContext';

import { App } from './App';

import './mock-api/server';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DtMoneyContextProvider>
        <App />
      </DtMoneyContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
