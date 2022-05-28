import { MongoQuotesService } from 'services/mongo/MongoQuotesService';
import { IQuote } from 'types/IQuote';
import { IFavouriteQuotesService } from './IFavouriteQuotesService';

class FavouriteQuotesService implements IFavouriteQuotesService {
  private dataService: MongoQuotesService;

  constructor() {
    this.dataService = new MongoQuotesService();
  }

  getFavourites(page: number) {
    return this.dataService.getFavourites(page);
  }

  isFavourite(quote: IQuote) {
    return this.dataService.isFavourite(quote);
  }

  makeFavourite(quote: IQuote) {
    return this.dataService.makeFavourite(quote);
  }

  removeFromFavourites(quoteId: string) {
    return this.dataService.removeFromFavourites(quoteId);
  }
}

export const favouriteQuotesService = new FavouriteQuotesService();
