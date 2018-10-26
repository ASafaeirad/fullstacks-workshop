import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './pages';

const theme = {
  colors: {
    primary: '#67f',
    feedbacks: {
      success: '#67f',
      error: '#c22',
    },
  },
};

const Root = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

export default hot(module)(Root);
