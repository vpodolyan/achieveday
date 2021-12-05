import { ObjectID } from 'mongodb';
import { IQuote } from './IQuote';

export interface IFavouriteQuote extends IQuote {
  quoteId: ObjectID;
  // eslint-disable-next-line camelcase
  userId: string;
}
