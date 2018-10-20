import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Workshops } from '../Workshops';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/workshops" component={Workshops} />
  </Switch>
);

export default App;
