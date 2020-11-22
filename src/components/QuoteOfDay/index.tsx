import Spinner from 'components/Spinner/Spinner';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import IQuote from 'types/IQuote';
import IAppState from 'types/state/IAppState';

import { Quote } from './Quote';

interface IProps {
    show: boolean;
}

const QuoteOfDay = memo<IProps>(({ show }) => {
  const quote = useSelector<IAppState, IQuote | undefined>((state) => state.quotes.dailyQuote, shallowEqual);
  const loading = useSelector<IAppState, boolean>((state) => state.quotes.loading, shallowEqual);

  if (!show) {
    return null;
  }

  return (
    <div className="pt-4 pt-md-5 text-center">
      {loading || !quote
        ? <Spinner size={2} />
        : <Quote text={quote.text} author={quote.author} />
      }
    </div>
  );
});

QuoteOfDay.displayName = 'QuoteOfDay';

export default QuoteOfDay;
