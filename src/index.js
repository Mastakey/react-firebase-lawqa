import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from "./store/sagas";
import reducers from './store/reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const sagaMiddleware = createSagaMiddleWare();
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore);
const store = createStoreWithMiddleware(reducers);
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
