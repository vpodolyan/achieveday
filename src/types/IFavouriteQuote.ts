import { ObjectID } from 'mongodb';
import { IQuote } from './IQuote';

export interface IFavouriteQuote extends IQuote {
  quoteId: ObjectID;
  userId: string;
}
