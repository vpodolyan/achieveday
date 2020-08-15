import React, {PureComponent} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {IAuthService, OAuthProviders} from 'services/auth/IAuthService';
import IUser from 'types/IUser';
import IAppState from 'types/state/IAppState';

import {navigate} from '@reach/router';

import {AuthContext} from '../App';
import HeaderBarContainer from './HeaderBarContainer';

interface IProps extends WithTranslation {
    children?: React.ReactNode;
    user: IUser;
}

class HeaderBar extends PureComponent<IProps> {
    render() {
        const { t } = this.props;

        return (
            <HeaderBarContainer>
                <AuthContext.Consumer>
                    {({ authService }: { authService: IAuthService }) => (
                        !authService.isAuthenticated() ? (
                            <div>
                                <button onClick={() => authService.logInOauth(OAuthProviders.Google)}>
                                    {t('log_in')}
                                </button>
                            </div>
                        )
                        : (
                            <div>
                                <span className='pr-2'>
                                    { this.props.user.name }
                                </span>
                                <button onClick={() => {
                                    authService.logOut();
                                    navigate('/');
                                }}>
                                    {t('log_out')}
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
)(withTranslation('common')(HeaderBar));
