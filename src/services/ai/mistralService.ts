import { Mistral } from '@mistralai/mistralai';

if (!process.env.MISTRAL_API_KEY) {
  throw new Error('MISTRAL_API_KEY is not defined!');
}

class MistralService {
  private client: Mistral;

  constructor(apiKey: string) {
    this.client = new Mistral({ apiKey });
  }

  async prompt(prompt: string, model: string = 'mistral-small-latest') {
    try {
      const response = await this.client.chat.complete({
        model: model,
        temperature: 1.5,
        messages: [{ role: 'user', content: prompt }]
      });

      return response.choices?.[0].message.content;
    } catch (error) {
      console.error('Error in Mistral API call:', error);
      throw error;
    }
  }
}

export const mistralService = new MistralService(process.env.MISTRAL_API_KEY);
