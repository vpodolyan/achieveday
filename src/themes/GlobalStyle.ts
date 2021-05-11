import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle({
  'html, body, #root, #router-root': {
    height: '100%'
  },
  '*:focus': {
    outline: 'none'
  }
});
