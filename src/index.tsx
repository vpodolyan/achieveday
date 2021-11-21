import './utils/i18n';

import { quotesMiddleware } from 'middlewares/quotesMiddleware';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeManagementProvider } from 'theming/ThemeManagementProvider';

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

const queryClient = new QueryClient();

render(
  <>
    <Provider store={store}>
      <ThemeManagementProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeManagementProvider>
    </Provider>
  </>,
  document.getElementById('root')
);
