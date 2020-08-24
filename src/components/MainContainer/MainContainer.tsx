import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Title = styled.h1`
    color: #317eac;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const MainContainer: FC = ({ children }) => {
  const { t } = useTranslation('achievements');

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <Title className="text-center">{t('title')}</Title>
          <p className="lead text-center">{t('subtitle')}</p>

          <div className="d-flex-column">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
