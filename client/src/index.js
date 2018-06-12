import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import builder from './store/reducers/builder';
import order from './store/reducers/order';
import auth from './store/reducers/auth';
import appReducer from './store/reducers/app';

const rootReducer = combineReducers({
  builder: builder,
  order: order,
  auth: auth,
  appReducer: appReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
  applyMiddleware(thunk),
)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
