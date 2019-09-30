import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import achievementsMiddleware from './middlewares/achievementsMiddleware';

import '../css/style.css'

const store = createStore(
    reducer,
    applyMiddleware(achievementsMiddleware),
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
