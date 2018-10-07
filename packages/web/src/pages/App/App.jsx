import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <h1 style={{ margin: 'auto' }}>Hello World</h1>} />
  </Switch>
);

export default App;
