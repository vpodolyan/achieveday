import { mistralService } from 'services/ai/mistralService';
import { authService } from 'services/auth/authService';
import { MongoQuotesService } from 'services/mongo/MongoQuotesService';
import { IQuote } from 'types/IQuote';
import { IQuotesService } from './IQuotesService';
import { isQouteOfDayOutdated } from './utils/isQouteOfDayOutdated';

class AIPhrasesService implements IQuotesService {
  private dataService: MongoQuotesService;

  constructor() {
    this.dataService = new MongoQuotesService();
  }

  private getFallbackQuote(): IQuote {
    const fallbackQuotes = [
      {
        author: 'System',
        text: 'Error occurred, but keep going anyway! 🚀'
      },
      {
        author: 'Error Bot 🤖',
        text: "Oops! Our AI had a coffee break. Here's your backup motivation: Just pretend this is profound! ☕"
      }
    ];

    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
  }

  getQuoteOfDay: () => Promise<IQuote | undefined> = async () => {
    if (!authService.isAuthenticated()) {
      throw new Error('User is not authenticated');
    }

    try {
      const qod = await this.dataService.getCurrentQuoteOfDay();

      if (!qod || isQouteOfDayOutdated(qod)) {
        try {
          const phrase = await mistralService.prompt(
            'Please come up with a motivational phrase. It should be new and unique. Display the phrase only'
          );

          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 1);
          expirationDate.setHours(0, 0, 0, 0);

          const userId = authService.getUserId() || '';

          const quote = {
            author: 'MistralAI',
            text: phrase?.toString().replace(/^"|"$/g, '') || ''
          };

          const newQuoteOfDay = {
            _id: qod?._id,
            quote,
            date: new Date(),
            expirationDate,
            userId
          };

          await this.dataService.setCurrentQuoteOfDay(newQuoteOfDay);
          return quote;
        } catch (aiError) {
          console.error('Failed to generate AI quote:', aiError);
          return this.getFallbackQuote();
        }
      }

      return qod.quote;
    } catch (error) {
      console.error('Error in getQuoteOfDay:', error);
      return this.getFallbackQuote();
    }
  };
}

export const aiPhrasesService = new AIPhrasesService();
