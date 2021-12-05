import { FC } from 'react';
import styled from 'styled-components';
import { IQuote } from 'types/IQuote';

interface IProps {
  quote: IQuote;
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteCard.background};
`;

const QuoteText = styled.div`
  color: ${({ theme }) => theme.colors.common.text};
`;

const QuoteAuthor = styled.footer`
  color: ${({ theme }) => theme.colors.common.textAlt};
`;

export const QuoteCard: FC<IProps> = ({ quote }) => {
  return (
    <Card className="shadow-sm p-3 m-2 mb-4 rounded">
      <blockquote className="blockquote mb-0">
        <QuoteText>“{quote.text}“</QuoteText>
        <QuoteAuthor className="blockquote-footer">{quote.author}</QuoteAuthor>
      </blockquote>
    </Card>
  );
};
