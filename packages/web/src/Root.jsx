import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { App } from './pages';

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default hot(module)(Root);
