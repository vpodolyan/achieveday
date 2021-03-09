import { ComponentType, FC, useContext } from 'react';

import { Redirect, RouteComponentProps } from '@reach/router';

import { AuthContext } from './App';

interface IProps extends RouteComponentProps {
  Component: ComponentType<any>;
}

export const WithAuthPage: FC<IProps> = ({ Component }) => {
  const { authService } = useContext(AuthContext);

  if (authService.isAuthenticated()) {
    return <Component />;
  }

  return <Redirect to="/" />;
};
