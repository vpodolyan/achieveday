import * as React from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import { OAuthProviders, IAuthService } from 'services/auth/IAuthService'
import { AuthContext } from '../App';

import HeaderBarContainer from './HeaderBarContainer';
import IAppState from 'types/state/IAppState';
import IUser from 'types/IUser';

interface Props {
    children?: React.ReactNode;
    user: IUser;
}

class HeaderBar extends React.PureComponent<Props> {
    render() {
        return (
            <HeaderBarContainer>
                <AuthContext.Consumer>
                    {({ authService }: { authService: IAuthService }) => (
                        !authService.isAuthenticated() ? (
                            <div>
                                NOT LOGGED IN
                                <button onClick={() => authService.logInOauth(OAuthProviders.Google)}>
                                    LogIn
                                </button>
                            </div>
                        )
                        : (
                            <div>
                                LOGGED IN as { this.props.user.name }
                                <button onClick={() => {
                                    authService.logOut();
                                    navigate('/');
                                }}>
                                    LogOut
                                </button>
                            </div>
                        )
                    )}
                </AuthContext.Consumer>
                {this.props.children}
            </HeaderBarContainer>
        )
    }
}

export default connect(
    (state: IAppState) => ({
        user: state.user,
    })
)(HeaderBar);
