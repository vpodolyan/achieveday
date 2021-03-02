import IQuote from 'types/IQuote';
import IQuotesService from './IQuotesService';

/**
 * Get quotes from https://quotes.rest/
 */
class QuotesService implements IQuotesService {
  getDailyQuote = async (category?: string): Promise<IQuote | undefined> => {
    try {
      const resp = await fetch(
        `https://quotes.rest/qod?category=${category}&language=en`
      );
      const json = await resp.json();
      const {
        contents: { quotes }
      } = json;

      if (!quotes.length) {
        throw new Error('Response has no quote');
      }

      return {
        author: quotes[0].author,
        text: quotes[0].quote
      };
    } catch (e) {
      console.error(e);
    }
  };
}

const quotesService = new QuotesService();

export default quotesService;
