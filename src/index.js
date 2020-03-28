import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import achievementsMiddleware from './middlewares/achievementsMiddleware';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(achievementsMiddleware)),
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
