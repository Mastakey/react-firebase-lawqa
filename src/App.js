import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';

import reducers from './reducers';

import Header from './components/header/header';
import Home from './components/content/home';
import RegisterForm from './components/auth/register_form';
import LoginForm from './components/auth/login_form';
import Questions from './components/content/questions/questions';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(promise))(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="content-container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/questions' component={Questions} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
