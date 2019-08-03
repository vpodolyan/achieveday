import * as React from 'react';

const MainContainer: React.FC = ({ children }) => (
    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <h1 className="text-center">What is your big win today?</h1>
                <p className="lead text-center">...or you have a lot ;)</p>

                <div className="text-center">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default MainContainer;
