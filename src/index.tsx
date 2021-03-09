import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { quotesMiddleware } from 'middlewares/quotesMiddleware';
import App from './components/App';
import { reducers } from './reducers';
import { achievementsMiddleware } from './middlewares/achievementsMiddleware';

import './utils/i18n';

const middlewares = applyMiddleware(achievementsMiddleware, quotesMiddleware);

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewares)
    : middlewares
);

const GlobalStyle = createGlobalStyle({
  '*:focus': {
    outline: 'none'
  }
});

render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
