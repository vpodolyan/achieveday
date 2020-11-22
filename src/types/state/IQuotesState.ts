import IQuote from 'types/IQuote';

export default interface IQuotesState {
    dailyQuote?: IQuote,
    loading: boolean;
}
