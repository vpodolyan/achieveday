import { setUser } from 'actions';
import { createContext, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StitchAuthService } from 'services/auth/StitchAuthService';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'themes/GlobalStyle';
import { lightTheme } from 'themes/lightTheme';

import { navigate, Router } from '@reach/router';

import { stitchClient } from '../stitch/client';
import { AchievementsPage } from './pages/AchievementsPage/AchievementsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { WithAuthPage } from './WithAuthPage';

const authService = new StitchAuthService(stitchClient);

const authContexValue = {
  authService
};

export const AuthContext = createContext(authContexValue);

const paths = {
  achievements: 'achievements'
};

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
      navigate(paths.achievements);
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AuthContext.Provider value={authContexValue}>
        <Router>
          <LoginPage path="/" />
          <WithAuthPage
            Component={AchievementsPage}
            path={paths.achievements}
          />
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};
