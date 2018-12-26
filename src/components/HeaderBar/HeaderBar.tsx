import * as React from "react";

import { OAuthProviders, AuthService } from 'services/auth/AuthService';
import { AuthContext } from '../App';

interface Props {
    children?: React.ReactNode
}

export default class HeaderBar extends React.PureComponent<Props, void> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
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
                                LOGGED IN
                                <button onClick={() => { authService.logOut(); location.reload(); }}>
                                    LogOut
                                </button>
                            </div>
                        )
                    )}
                </AuthContext.Consumer>
                {this.props.children}
            </React.Fragment>
        )
    }
}
