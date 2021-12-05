import { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.common.pageTitle};
  margin-top: 20px;
  margin-bottom: 1.5rem;
`;

interface IProps {
  title: string;
}

export const MainContainer: FC<IProps> = ({ children, title }) => {
  return (
    <main className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <Title className="text-center">{title}</Title>
          <div className="d-flex-column">{children}</div>
        </div>
      </div>
    </main>
  );
};
