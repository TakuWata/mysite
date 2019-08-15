import React from 'react';
import Home from './Home';
import About from './About';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
    </Router>
  );
};

export default App;
