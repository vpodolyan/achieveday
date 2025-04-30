import { authService } from 'services/auth/authService';
import { MongoQuotesService } from 'services/mongo/MongoQuotesService';
import { IQuote } from 'types/IQuote';
import { IQuotableApiQuote } from 'types/IQutableApiQuote';
import { IQuotesService } from './IQuotesService';
import { isQouteOfDayOutdated } from './utils/isQouteOfDayOutdated';

class QuotesService implements IQuotesService {
  private dataService: MongoQuotesService;

  constructor() {
    this.dataService = new MongoQuotesService();
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

      if (!qod || isQouteOfDayOutdated(qod)) {
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
          quote: this.quotableToQuote(quotableApiQuote),
          date: new Date(),
          expirationDate,
          userId
        };

        await this.dataService.setCurrentQuoteOfDay(newQuoteOfDay);

        return newQuoteOfDay.quote;
      }

      return qod?.quote;
    } catch (e) {
      console.error(e);
    }
  };
}

export const quotesService = new QuotesService();
