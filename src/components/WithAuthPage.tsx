import { ComponentType, FC } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import stitchClient from '../stitch/client';

interface IProps extends RouteComponentProps {
  Component: ComponentType<any>;
}

const WithAuthPage: FC<IProps> = ({ Component }) => {
  if (stitchClient.auth.isLoggedIn) {
    return <Component />;
  }

  return <Redirect to="/" />;
};

export default WithAuthPage;
