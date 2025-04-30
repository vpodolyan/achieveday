import { IMongoItem } from './IMongoItem';

export interface IQuote extends Partial<IMongoItem> {
  author: string;
  text: string;
}
