import { stitchClient } from 'stitch/client';
import { IQuote } from 'types/IQuote';
import { IQuotesService } from './IQuotesService';

class QuotesService implements IQuotesService {
  getDailyQuote: () => Promise<IQuote | undefined> = async () => {
    try {
      const quote = await stitchClient.callFunction('getQuoteOfDay', []);

      return {
        author: quote.author,
        text: quote.content,
        _id: quote._id
      };
    } catch (e) {
      console.error(e);
    }
  };
}

export const quotesService = new QuotesService();
