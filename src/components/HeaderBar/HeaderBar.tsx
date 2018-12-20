import * as React from "react";

import { OAuthProviders, AuthService } from 'services/auth/AuthService';
import { UserContext } from '../App';

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
                <UserContext.Consumer>
                    {({ authService }: { authService: AuthService}) => (
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
                </UserContext.Consumer>
                {this.props.children}
            </React.Fragment>
        )
    }
}
