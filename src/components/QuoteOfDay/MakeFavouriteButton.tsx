import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from 'components/Spinner/Spinner';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { favouriteQuotesService } from 'services/quotes/favouriteQuotesService';
import styled from 'styled-components';
import { IAppState } from 'types/state/IAppState';

const Container = styled.div`
  width: 24px;
`;

const StarIcon = styled(FontAwesomeIcon)<{ isFavourited: boolean }>`
  font-size: 1rem;
  color: ${({ theme, isFavourited }) =>
    isFavourited ? 'orange' : theme.colors.common.primaryAlt};

  &:hover {
    cursor: pointer;
  }
`;

interface IProps {
  className?: string;
}

export const MakeFavouriteButton: FC<IProps> = ({ className }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const [loading, setLoading] = useState(true);

  const quote = useSelector((state: IAppState) => state.quotes.dailyQuote);

  useEffect(() => {
    if (quote) {
      favouriteQuotesService.isFavourite(quote).then((result) => {
        setIsFavourite(result);
        setLoading(false);
      });
    }
  }, [quote]);

  const makeFavourite = async () => {
    if (!quote) {
      return;
    }
    const result = await favouriteQuotesService.makeFavourite(quote);

    if (result) {
      setIsFavourite(true);
    }

    setLoading(false);
  };

  const unFavourite = async () => {
    if (!quote) {
      return;
    }

    const result = await favouriteQuotesService.removeFromFavourites(quote._id);

    if (result) {
      setIsFavourite(false);
    }

    setLoading(false);
  };

  const handleFavouriteButtonClick = async () => {
    if (!quote) {
      return;
    }

    setLoading(true);

    try {
      isFavourite ? unFavourite() : makeFavourite();
    } catch {
      setIsFavourite(false);
      setLoading(false);
    }
  };

  return (
    <Container className={className}>
      {loading ? (
        <Spinner size={1} />
      ) : (
        <StarIcon
          icon={faStar}
          isFavourited={isFavourite}
          onClick={handleFavouriteButtonClick}
        />
      )}
    </Container>
  );
};
