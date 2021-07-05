import styled from 'styled-components';

export const Arrow = styled.span`
  display: inline-block;
  font-size: 28px;

  color: ${({ theme }) => theme.colors.common.inputBorder};

  &:hover {
    cursor: pointer;
  }
`;
