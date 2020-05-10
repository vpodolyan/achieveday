import { Reducer } from "redux";
import IQuotesState from "types/state/IQuotesState";
import { GET_DAILY_QUOTE_SUCCESS } from "actions/types";

const initialState: IQuotesState = {
    dailyQuote: undefined
};

const quotes: Reducer<IQuotesState> = (state = initialState, action) => {
    switch (action.type) {
        case GET_DAILY_QUOTE_SUCCESS:
            return {
                dailyQuote: action.payload.quote
            };
    }
    
    return state;
};

export default quotes;
