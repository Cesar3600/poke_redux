import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { pokemonReducer } from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import { featuring, logger } from './middlewares'


const enhanceCompose = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring))
const store = createStore(pokemonReducer, enhanceCompose)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)


