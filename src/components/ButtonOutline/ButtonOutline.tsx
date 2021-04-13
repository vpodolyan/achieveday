import styled from 'styled-components';

export const ButtonOutline = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  outline: none;
  color: ${({ theme }) => theme.colors.common.primary};
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
