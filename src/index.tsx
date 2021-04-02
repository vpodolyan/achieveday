import './utils/i18n';

import { quotesMiddleware } from 'middlewares/quotesMiddleware';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { App } from './components/App';
import { achievementsMiddleware } from './middlewares/achievementsMiddleware';
import { reducers } from './reducers';

const middlewares = applyMiddleware(achievementsMiddleware, quotesMiddleware);

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewares)
    : middlewares
);

render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
