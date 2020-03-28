import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #317eac;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const MainContainer: React.FC = ({ children }) => (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Title className="text-center">What is your big win today?</Title>
                <p className="lead text-center">...or you have a lot ;)</p>

                <div className="text-center">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default MainContainer;
