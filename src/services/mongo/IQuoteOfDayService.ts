import { IQuoteOfDay } from 'types/IQuoteOfDay';

export interface IQuoteOfDayService {
  getCurrentQuoteOfDay: () => Promise<IQuoteOfDay | null>;
  setCurrentQuoteOfDay: (qod: IQuoteOfDay) => Promise<void>;
}
