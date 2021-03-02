import IQuote from 'types/IQuote';

export default interface IQuotesService {
  getDailyQuote: (category?: string) => Promise<IQuote | undefined>;
}
