import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

export default App;
