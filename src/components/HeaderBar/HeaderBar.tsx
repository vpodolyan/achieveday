import * as React from 'react';
import { connect } from 'react-redux';

import { OAuthProviders, AuthService } from 'services/auth/AuthService';
import { AuthContext } from '../App';

import HeaderBarContainer from './HeaderBarContainer';

interface Props {
    children?: React.ReactNode;
    user: { name: string };
}

class HeaderBar extends React.PureComponent<Props> {
    render() {
        return (
            <HeaderBarContainer>
                <AuthContext.Consumer>
                    {({ authService }: { authService: AuthService }) => (
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
                                <button onClick={() => { authService.logOut(); location.reload(); }}>
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
    (state) => ({
        user: state.user,
    })
)(HeaderBar);
