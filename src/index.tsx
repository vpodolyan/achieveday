import './utils/i18n';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeManagementProvider } from 'theming/ThemeManagementProvider';

import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers);

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
