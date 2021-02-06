import { createContext, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Router, navigate } from '@reach/router';

import { setUser } from 'actions';
import IUser from 'types/IUser';
import StichAuthService from '../services/auth/StitchAuthService';
import stitchClient from '../stitch/client';

import AchievementsPage from './pages/AchievementsPage/AchievementsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import WithAuthPage from './WithAuthPage';

const authService = new StichAuthService(stitchClient);

const authContexValue = {
  authService
};

export const AuthContext = createContext(authContexValue);

const paths = {
  achievements: 'achievements'
};

interface IProps {
    setUser: (user: IUser) => void;
}

class App extends PureComponent<IProps> {
  componentDidMount () {
    if (stitchClient.auth.hasRedirectResult()) {
      stitchClient.auth.handleRedirectResult().then((user) => {
        // @ts-ignore
        this.props.setUser({ ...user.profile.data, id: user.id });
        navigate(paths.achievements);
      });
    }

    if (stitchClient.auth.isLoggedIn && stitchClient.auth.user) {
      // @ts-ignore
      this.props.setUser({ ...stitchClient.auth.user.profile.data, id: stitchClient.auth.user.id });
      navigate(paths.achievements);
    }
  }

  render () {
    return (
      <AuthContext.Provider value={authContexValue}>
        <Router>
          <LoginPage path="/" />
          <WithAuthPage
            Component={AchievementsPage}
            path={paths.achievements}
          />
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default connect(null, { setUser })(App);
