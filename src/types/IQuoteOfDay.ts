import { IMongoItem } from './IMongoItem';
import { IQuotableApiQuote } from './IQutableApiQuote';

export interface IQuoteOfDay extends IMongoItem {
  quote: IQuotableApiQuote;
  date: Date;
  expirationDate: Date;
  userId: string;
}
