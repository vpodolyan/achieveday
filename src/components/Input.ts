import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.common.inputBorder};
  color: ${({ theme }) => theme.colors.common.inputText};
  background-color: transparent;
  font-size: 28px;
`;
