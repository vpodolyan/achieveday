import { getDaiylyQuoteFailAction, getDaiylyQuoteSuccessAction } from 'actions';
import { GET_DAILY_QUOTE } from 'actions/types';
import { Store } from 'redux';
import { quotableService } from 'services/quotes/quotableService';

export const quotesMiddleware = (store: Store) => (next) => async (action) => {
  const nextAction = next(action);

  if (action.type === GET_DAILY_QUOTE) {
    const quote = await quotableService.getDailyQuote();

    if (!quote) {
      store.dispatch(getDaiylyQuoteFailAction());
    } else {
      store.dispatch(getDaiylyQuoteSuccessAction(quote));
    }
  }

  return nextAction;
};
