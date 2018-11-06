import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './pages';

const theme = {
  colors: {
    primary: '#67f',
    muted: 'rgba(0,0,0, .3)',
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

// TODO: Incompatibility with React Hooks
// https://github.com/gaearon/react-hot-loader/issues/1088
// import { hot } from 'react-hot-loader';
// export default hot(module)(Root);
export default Root;
