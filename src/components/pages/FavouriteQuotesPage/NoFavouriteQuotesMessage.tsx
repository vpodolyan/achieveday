import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { InfiniteData } from 'react-query';
import styled from 'styled-components';
import { IFavouriteQuote } from 'types/IFavouriteQuote';

interface IProps {
  isDataLoading: boolean;
  data: InfiniteData<IFavouriteQuote[]> | undefined;
}

const Message = styled.div`
  color: ${({ theme }) => theme.colors.common.textAlt};
`;

export const NoFavouriteQuotesMessage: FC<IProps> = ({
  isDataLoading,
  data
}) => {
  const { t } = useTranslation('favouriteQuotes');

  if (
    !isDataLoading &&
    data?.pages &&
    data?.pages.length > 0 &&
    data.pages[0].length === 0
  )
    return (
      <div className="d-flex justify-content-center align-items-center text-center mt-5">
        <Message>
          {t('no_quotes_message')}
          <br />
          {t('mark_as_favourite_tip')}
        </Message>
      </div>
    );

  return null;
};
