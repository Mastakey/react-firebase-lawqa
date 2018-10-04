import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';

import sagas from "./store/sagas";
import reducers from './store/reducers';

import Header from './components/header/header';
import Home from './components/content/home';
import RegisterForm from './components/auth/register_form';
import LoginForm from './components/auth/login_form';
import Questions from './components/content/questions/questions';
import QuestionAddForm from './components/content/questions/question_add_form';

//Example Forms
import ReduxForm from './components/examples/redux_form';
import ReduxFormAbs from './components/examples/redux_form_abstract_render';

const sagaMiddleware = createSagaMiddleWare();
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore);
const store = createStoreWithMiddleware(reducers);
sagaMiddleware.run(sagas);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="content-container">
          <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/reduxform' component={ReduxForm} />
                <Route exact path='/reduxformabs' component={ReduxFormAbs} />
                <Route exact path='/register' component={RegisterForm} />
                <Route exact path='/login' component={LoginForm} />
                <Route exact path='/questions' component={Questions} />
                <Route path='/questions/add' component={QuestionAddForm} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
