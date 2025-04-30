import { RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';
import { IFavouriteQuotesService } from 'services/quotes/IFavouriteQuotesService';
import { stitchClient } from 'stitch/client';
import { IFavouriteQuote } from 'types/IFavouriteQuote';
import { IQuote } from 'types/IQuote';
import { IQuoteOfDay } from 'types/IQuoteOfDay';
import { IQuoteOfDayService } from './IQuoteOfDayService';
import { MongoService } from './MongoService';

export class MongoQuotesService
  implements IFavouriteQuotesService, IQuoteOfDayService
{
  quotesCollection: RemoteMongoCollection<IFavouriteQuote>;
  quoteOfDayCollection: RemoteMongoCollection<IQuoteOfDay>;
  pageSize: number = 20;

  constructor() {
    const mongoService = new MongoService();

    this.quotesCollection = mongoService.getCollection('favourite_quotes');
    this.quoteOfDayCollection = mongoService.getCollection('quote_of_day');
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

    const result = await this.quotesCollection.insertOne(favouriteQuote);

    return { ...favouriteQuote, _id: result.insertedId };
  }

  async removeFromFavourites(quoteId: string) {
    const result = await this.quotesCollection.deleteOne({
      quoteId
    });

    return result.deletedCount > 0;
  }

  async getCurrentQuoteOfDay() {
    return this.quoteOfDayCollection.findOne();
  }

  async setCurrentQuoteOfDay(qod: IQuoteOfDay) {
    if (qod?._id) {
      this.quoteOfDayCollection.findOneAndReplace({ _id: qod._id }, qod);
    } else {
      this.quoteOfDayCollection.insertOne(qod);
    }
  }
}
