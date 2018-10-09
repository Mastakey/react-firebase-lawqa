import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/content/home';
import RegisterForm from './components/auth/register_form';
import LoginForm from './components/auth/login_form';
import Questions from './components/content/questions/questions';
import QuestionAddForm from './components/content/questions/question_add_form';
import QuestionDetail from './components/content/questions/question_details';

//Example Forms
import ReduxForm from './components/examples/redux_form';
import ReduxFormAbs from './components/examples/redux_form_abstract_render';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div className="app-container">
          <div className="header-container navbar">
            <Header />
          </div>
          <div className="content-container">
              <div className="main-container">
                <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/reduxform' component={ReduxForm} />
                      <Route exact path='/reduxformabs' component={ReduxFormAbs} />
                      <Route exact path='/register' component={RegisterForm} />
                      <Route exact path='/login' component={LoginForm} />
                      <Route exact path='/questions' component={Questions} />
                      <Route exact path='/questions/:id' component={QuestionDetail} />
                      <Route path='/questions/add' component={QuestionAddForm} />
                </Switch>
              </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showJumbo: state.showJumbo
  };
}

export default connect(mapStateToProps, {})(App);
