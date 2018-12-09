import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Down } from '../Down';
import { Home } from '../Home';
import { Workshops } from '../Workshops';
import { Manage } from '../Manage';

const isDown = false;

const App = () => (
  isDown
    ? <Down />
    : (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workshops" component={Workshops} />
        <Route path="/manage/:tab?" component={Manage} />
      </Switch>
    )
);

export default App;
