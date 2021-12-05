export interface ITheme {
  id: string;
  name: string;
  colors: {
    common: any;
    achievementsPage: any;
    loginPage: any;
    quoteCard: { background: string };
  }; // TODO: Fix types
}
