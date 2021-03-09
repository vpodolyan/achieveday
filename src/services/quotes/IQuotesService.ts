import { IQuote } from 'types/IQuote';

export interface IQuotesService {
  getDailyQuote: (category?: string) => Promise<IQuote | undefined>;
}
