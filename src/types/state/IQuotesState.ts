import { IQuote } from 'types/IQuote';

export interface IQuotesState {
  dailyQuote?: IQuote;
  loading: boolean;
  lastSuccessFetchDate: Date | undefined;
}
