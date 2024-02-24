import { Spinner } from 'components/Spinner/Spinner';
import { FC, memo } from 'react';
import { IQuote } from 'types/IQuote';
import { Quote } from './Quote';

interface IProps {
  show: boolean;
  quote: IQuote | undefined;
  isLoading: boolean;
}

export const QuoteOfDay: FC<IProps> = memo(({ show, quote, isLoading }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="pt-5 text-center">
      {isLoading || !quote ? (
        <Spinner size={2} />
      ) : (
        <Quote text={quote.text} author={quote.author} />
      )}
    </div>
  );
});

QuoteOfDay.displayName = 'QuoteOfDay';
