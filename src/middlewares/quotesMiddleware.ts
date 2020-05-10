import { Store } from "redux";
import { GET_DAILY_QUOTE } from "actions/types";
import quotesService from "services/quotes/quotesService";
import { getDaiylyQuoteSuccessAction, getDaiylyQuoteFailAction } from "actions";

const quotesMiddleware = (store: Store)  => next => async action => {
    if (action.type === GET_DAILY_QUOTE) {
        const quote = await quotesService.getDailyQuote('inspire');
        
        if (!quote) {
            store.dispatch(getDaiylyQuoteFailAction());
        } else {
            store.dispatch(getDaiylyQuoteSuccessAction(quote))
        }
    }

    return next(action);
}

export default quotesMiddleware;
