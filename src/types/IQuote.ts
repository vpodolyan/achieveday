import { IMongoItem } from './IMongoItem';

export interface IQuote extends IMongoItem {
  author: string;
  text: string;
}
