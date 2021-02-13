import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import quotesMiddleware from 'middlewares/quotesMiddleware';
import App from './components/App';
import reducer from './reducers';
import achievementsMiddleware from './middlewares/achievementsMiddleware';

import './utils/i18n';

import '../css/style.css';

const middlewares = applyMiddleware(achievementsMiddleware, quotesMiddleware);

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewares)
    : middlewares
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
