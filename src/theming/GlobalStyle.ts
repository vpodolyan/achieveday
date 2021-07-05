import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'types/ITheme';

export const GlobalStyle = createGlobalStyle(
  ({ theme }: { theme: ITheme }) => ({
    'html, body, #root, #router-root': {
      height: '100%',
      backgroundColor: theme.colors.common.background
    },
    '*:focus': {
      outline: 'none'
    }
  })
);
