import { DeleteButton } from 'components/DeleteButton/DeleteButton';
import { FC } from 'react';
import { favouriteQuotesService } from 'services/quotes/favouriteQuotesService';
import styled from 'styled-components';
import { IFavouriteQuote } from 'types/IFavouriteQuote';

interface IProps {
  quote: IFavouriteQuote;
  onUnfavourite: () => void;
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

const UnfavouriteButton = styled(DeleteButton)`
  &:hover {
    color: ${({ theme }) => theme.colors.common.textLighter};
  }
`;

export const QuoteCard: FC<IProps> = ({ quote, onUnfavourite }) => {
  const handleUnfavouriteClick = async (e) => {
    e.stopPropagation();

    const result = await favouriteQuotesService.removeFromFavourites(
      quote.quoteId
    );

    if (result) {
      onUnfavourite();
    }
  };

  return (
    <Card className="shadow-sm p-3 m-2 mb-4 rounded">
      <UnfavouriteButton
        className="float-right"
        onClick={handleUnfavouriteClick}
      />
      <blockquote className="blockquote mb-0">
        <QuoteText>“{quote.text}“</QuoteText>
        <QuoteAuthor className="blockquote-footer">{quote.author}</QuoteAuthor>
      </blockquote>
    </Card>
  );
};
