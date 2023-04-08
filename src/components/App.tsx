import { navigate, Router } from '@reach/router';
import { setUser } from 'actions';
import { createContext, FC, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authService } from 'services/auth/authService';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theming/GlobalStyle';
import { useTheme } from 'theming/useTheme';
import { paths } from 'utils/paths';
import { stitchClient } from '../stitch/client';
import { AchievementsPage } from './pages/AchievementsPage/AchievementsPage';
import { FavouriteQuotes } from './pages/FavouriteQuotesPage/FavouriteQuotesPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { WithAuthPage } from './WithAuthPage';

const authContexValue = {
  authService
};

export const AuthContext = createContext(authContexValue);

export const App: FC = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useLayoutEffect(() => {
    if (stitchClient.auth.hasRedirectResult()) {
      stitchClient.auth.handleRedirectResult().then((user) => {
        dispatch(
          setUser({
            ...// @ts-ignore
            user.profile.data,
            id: user.id
          })
        );
        navigate(paths.achievements);
      });
    }

    if (stitchClient.auth.isLoggedIn && stitchClient.auth.user) {
      dispatch(
        setUser({
          // @ts-ignore
          ...stitchClient.auth.user.profile.data,
          id: stitchClient.auth.user.id
        })
      );
    }
  }, [dispatch]);

  return (
    // @ts-expect-error There's type issue relate with styled-components + React v18, probably will be fixed in v6.0.0
    // https://github.com/styled-components/styled-components/issues/3738
    <ThemeProvider theme={theme}>
      {/* @ts-expect-error Please see the comment above */}
      <GlobalStyle />
      <AuthContext.Provider value={authContexValue}>
        {/* @ts-expect-error TODO: React Router is no longer maintained, we need to migrate to React Router */}
        <Router id="router-root">
          <LoginPage path="/" default />
          <WithAuthPage
            Component={AchievementsPage}
            path={paths.achievements}
          />
          <WithAuthPage
            Component={FavouriteQuotes}
            path={paths.favouriteQuotes}
          />
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};
