import { stitchClient } from 'stitch/client';
import { IQuote } from 'types/IQuote';
import { IQuotesService } from './IQuotesService';

class QuotableService implements IQuotesService {
  getDailyQuote: () => Promise<IQuote | undefined> = async () => {
    try {
      const quote = await stitchClient.callFunction('getQuoteOfDay', []);

      return {
        author: quote.author,
        text: quote.content
      };
    } catch (e) {
      console.error(e);
    }
  };
}

export const quotableService = new QuotableService();
