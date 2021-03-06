import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.loginPage.background};
  font-family: 'Open Sans', 'Ubuntu', 'Helvetica Neue', sans-serif;
`;
