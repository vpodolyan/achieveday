import { IMongoItem } from './IMongoItem';
import { IQuote } from './IQuote';

export interface IQuoteOfDay extends IMongoItem {
  quote: IQuote;
  date: Date;
  expirationDate: Date;
  userId: string;
}
