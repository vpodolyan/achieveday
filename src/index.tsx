import './utils/i18n';

import { quotesMiddleware } from 'middlewares/quotesMiddleware';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeManagementProvider } from 'theming/ThemeManagementProvider';

import { App } from './components/App';
import { reducers } from './reducers';

const middlewares = applyMiddleware(quotesMiddleware);

const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewares)
    : middlewares
);

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <ThemeManagementProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeManagementProvider>
    </Provider>
  </>
);
