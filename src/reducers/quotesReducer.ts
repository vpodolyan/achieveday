import { Reducer } from 'redux';
import IQuotesState from 'types/state/IQuotesState';
import { GET_DAILY_QUOTE, GET_DAILY_QUOTE_FAIL, GET_DAILY_QUOTE_SUCCESS } from 'actions/types';

const initialState: IQuotesState = {
  dailyQuote: undefined,
  loading: false
};

const quotes: Reducer<IQuotesState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_QUOTE:
      return {
        ...state,
        loading: true
      };

    case GET_DAILY_QUOTE_SUCCESS:
      return {
        ...state,
        dailyQuote: action.payload.quote,
        loading: false
      };

    case GET_DAILY_QUOTE_FAIL:
      return {
        ...state,
        loading: false
      };
  }

  return state;
};

export default quotes;
