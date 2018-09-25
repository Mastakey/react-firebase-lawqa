import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/content/home';
import RegisterForm from './components/auth/register_form';
import LoginForm from './components/auth/login_form';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/login' component={LoginForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
