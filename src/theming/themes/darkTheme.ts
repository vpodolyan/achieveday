import { ITheme } from 'types/ITheme';

export const darkTheme: ITheme = {
  id: '2',
  name: 'dark',
  colors: {
    common: {
      headerBackground: '#6929F7',
      primary: '#6929F7',
      primaryDarker: '#4D02B1',
      secondary: '#31056B',
      background: '#1C0040',
      text: '#CDC1D9',
      textAlt: '#BD9DE2',
      textLighter: '#F0E6FA',
      pageTitle: '#6929F7',
      t: '#726093',
      inputText: '#CDC1D9',
      inputBorder: '#483365',
      userName: '#4D02B1',
      themeToggleBackground: '#4D02B1',
      themeToggle: '#CDC1D9'
    },
    achievementsPage: {
      addButton: '#483365',
      quoteText: '#6929F7',
      quoteAuthor: '#4D02B1'
    },
    loginPage: {
      background: '#63c8f8'
    }
  }
};
