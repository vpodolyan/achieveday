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
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 1);
          expirationDate.setHours(0, 0, 0, 0);

          const userId = authService.getUserId() || '';

          const phrase = await mistralService.completeMessages([
            {
              role: 'user',
              content: 'Hi! Please come up with some motivational phrase.'
            },
            {
              role: 'assistant',
              content:
                'Embrace each day as a chance to become a better version of yourself.'
            },
            {
              role: 'assistant',
              content:
                'Embrace the storm within, for it is the wind that shapes the tallest trees.'
            },
            {
              role: 'assistant',
              content:
                'Cultivate the garden of your mind, for even the smallest seed can grow into a mighty oak when nurtured by patience and persistence.'
            },
            {
              role: 'assistant',
              content:
                "Unleash the dormant potential nestled deep within like a seed waiting for spring's first thaw, and watch your spirit bloom against all odds."
            },
            {
              role: 'user',
              content:
                'Compose a unique motivational phrase focused on personal growth and self-improvement. It must be one or two sentences. Ensure the phrase starts with a different word each time, avoiding repetition. Incorporate a random element or metaphor, and use a varied sentence structure and vocabulary. Take inspiration from famous quotes. Explore different tones such as inspirational, reflective, or energetic. Do not use quotation marks. Display only one phrase'
            }
          ]);

          const quote = {
            author: 'MistralAI',
            text: phrase?.toString() || ''
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
