import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { App } from './pages';

const theme = {
  colors: {
    primary: '#67f',
    muted: 'rgba(0,0,0, .3)',
    dark: '#111416',
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
