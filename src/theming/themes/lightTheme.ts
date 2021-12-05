import { ITheme } from 'types/ITheme';

export const lightTheme: ITheme = {
  id: '1',
  name: 'light',
  colors: {
    common: {
      primary: '#1B8FD3',
      primaryAlt: '#444444',
      secondary: '#fff',
      background: '#fff',
      headerBackground: '#fff',
      textAlt: '#6c757d',
      pageTitle: '#317eac',
      inputBorder: '#ccc',
      inputText: '#444444',
      themeToggleBackground: '#444444',
      themeToggle: '#fff'
    },
    achievementsPage: {
      addButton: '#483365',
      quoteText: '#444444',
      quoteAuthor: '#444444'
    },
    loginPage: {
      background: '#63c8f8'
    },
    quoteCard: {
      background: '#ffffff'
    }
  }
};
