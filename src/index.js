import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { pokemonReducer } from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { guestPokemon, showAction } from './middlewares';


const middlewareEnhance = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(showAction, guestPokemon))

const store = createStore(pokemonReducer, middlewareEnhance)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)


