import { IFavouriteQuote } from 'types/IFavouriteQuote';
import { IQuote } from 'types/IQuote';

export interface IFavouriteQuotesService {
  getFavourites: (page: number) => Promise<IFavouriteQuote[]>;
  isFavourite: (quote: IQuote) => Promise<boolean>;
  makeFavourite: (quote: IQuote) => Promise<IFavouriteQuote>;
  removeFromFavourites: (quoteId: string) => Promise<boolean>;
}
