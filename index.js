/**
 * Created by piotrowy on 11.02.2017.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import tabs from './src/reducers/tabs';
import createLogger from 'redux-logger';

import './src/styles/main.scss';

import App from './src/components/App'

const store = createStore(combineReducers ({
  tabs
}), applyMiddleware(thunk, createLogger()));


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
