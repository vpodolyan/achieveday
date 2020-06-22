import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import IAppState from 'types/state/IAppState';
import IQuote from 'types/IQuote';
import Title from './Title';
import Author from './Author';

interface IProps {
    show: boolean;
}

const QuoteOfDay = memo<IProps>(({show}) => {
    const quote = useSelector<IAppState, IQuote | undefined>((state) => state.quotes.dailyQuote, shallowEqual);
    
    if (!show || !quote) {
        return null;
    }

    return (
      <div className='pt-4'>
        <Title>“{quote.text}” &mdash;</Title>
        <Author>{quote.author}</Author>
      </div>
    );
});

export default QuoteOfDay;
