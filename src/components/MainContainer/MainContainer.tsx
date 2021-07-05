import { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.common.pageTitle};
  margin-top: 20px;
  margin-bottom: 1.5rem;
`;

export const MainContainer: FC = ({ children }) => {
  const { t } = useTranslation('achievements');

  return (
    <main className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <Title className="text-center">{t('title')}</Title>
          <div className="d-flex-column">{children}</div>
        </div>
      </div>
    </main>
  );
};
