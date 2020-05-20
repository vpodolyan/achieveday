import React, {ComponentType, FC} from 'react';
import stitchClient from '../stitch/client';
import { Redirect, RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
    Component: ComponentType<any>;
}

const WithAuthPage: FC<IProps> = ({Component}) => {
    if (stitchClient.auth.isLoggedIn) {
        return <Component />;
    }

    return <Redirect to='/' />;
}

export default WithAuthPage;