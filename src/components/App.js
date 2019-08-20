import React from 'react';
import Home from './Home';
import About from './About';
import Admin from './admin/Admin';
import SignUp from './admin/SignUp';
import Login from './admin/Login';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={Login} />
        <Route path='/admin' exact component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
