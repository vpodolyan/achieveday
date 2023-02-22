import { IQuote } from 'types/IQuote';

export interface IQuotesService {
  getQuoteOfDay: (category?: string) => Promise<IQuote | undefined>;
}
