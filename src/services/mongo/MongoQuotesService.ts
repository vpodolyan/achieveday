import { RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';
import { IFavouriteQuotesService } from 'services/quotes/IFavouriteQuotesService';
import { stitchClient } from 'stitch/client';
import { IFavouriteQuote } from 'types/IFavouriteQuote';
import { IQuote } from 'types/IQuote';
import { MongoService } from './MongoService';

export class MongoQuotesService implements IFavouriteQuotesService {
  quotesCollection: RemoteMongoCollection<IFavouriteQuote>;
  pageSize: number = 20;

  constructor() {
    const mongoService = new MongoService();

    this.quotesCollection = mongoService.getCollection('favourite_quotes');
  }

  async getFavourites(page: number = 0) {
    return this.quotesCollection
      .aggregate([
        { $sort: { _id: -1 } },
        { $skip: page * this.pageSize },
        { $limit: this.pageSize }
      ])
      .asArray();
  }

  async isFavourite(quote: IQuote) {
    const result = await this.quotesCollection.findOne({ quoteId: quote._id });
    return !!result;
  }

  async makeFavourite(quote: IQuote) {
    if (!stitchClient?.auth?.user?.id) {
      throw Error('User is not authorized.');
    }

    const favouriteQuote = {
      author: quote.author,
      text: quote.text,
      quoteId: quote._id,
      userId: stitchClient.auth.user.id
    };

    // @ts-expect-error We need to figure out how to omit _id in the type here
    // while keeping the full type in the collection type defenition.
    const result = await this.quotesCollection.insertOne(favouriteQuote);

    return { ...favouriteQuote, _id: result.insertedId };
  }

  async removeFromFavourites(quote: IQuote) {
    const result = await this.quotesCollection.deleteOne({
      quoteId: quote._id
    });

    return result.deletedCount > 0;
  }
}
