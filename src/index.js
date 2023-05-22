import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { pokemonReducer } from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import { logger } from './middlewares'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhanceCompose = composeAlt(applyMiddleware(thunk, logger))
const store = createStore(pokemonReducer, enhanceCompose)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)


