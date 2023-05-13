import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { pokemonReducer } from './reducers';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(pokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)


