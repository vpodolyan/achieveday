import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import quotesMiddleware from 'middlewares/quotesMiddleware';
import App from './components/App';
import reducer from './reducers';
import achievementsMiddleware from './middlewares/achievementsMiddleware';

import './utils/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(achievementsMiddleware, quotesMiddleware))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
