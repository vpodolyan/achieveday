import { authService } from 'services/auth/authService';
import { MongoQuotesService } from 'services/mongo/MongoQuotesService';
import { IQuote } from 'types/IQuote';
import { IQuotableApiQuote } from 'types/IQutableApiQuote';
import { IQuotesService } from './IQuotesService';

class QuotesService implements IQuotesService {
  private dataService: MongoQuotesService;

  constructor() {
    this.dataService = new MongoQuotesService();
  }

  private isOutdated(quote): boolean {
    if (!quote || !quote.expirationDate) {
      return true;
    }

    const now = Date.now();

    if (now > quote.expirationDate.getTime()) {
      return true;
    }

    return false;
  }

  private quotableToQuote(qod: IQuotableApiQuote): IQuote {
    return {
      _id: qod._id,
      author: qod.author,
      text: qod.content
    };
  }

  getQuoteOfDay: () => Promise<IQuote | undefined> = async () => {
    try {
      if (!authService.isAuthenticated()) {
        throw new Error('User is not authenticated');
      }

      const qod = await this.dataService.getCurrentQuoteOfDay();

      if (!qod || this.isOutdated(qod)) {
        const response = await fetch(
          'https://api.quotable.io/random?tags=inspirational'
        );

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        expirationDate.setHours(0, 0, 0, 0);

        const userId = authService.getUserId() || '';
        const quotableApiQuote = await response.json();

        const newQuoteOfDay = {
          _id: qod?._id,
          quote: quotableApiQuote,
          date: new Date(),
          expirationDate,
          userId
        };

        await this.dataService.setCurrentQuoteOfDay(newQuoteOfDay);

        return this.quotableToQuote(newQuoteOfDay.quote);
      }

      return this.quotableToQuote(qod?.quote);
    } catch (e) {
      console.error(e);
    }
  };
}

export const quotesService = new QuotesService();
