import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { QuoteCard } from 'components/QuoteCard/QuoteCard';
import { Spinner } from 'components/Spinner/Spinner';
import { FC, Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { favouriteQuotesService } from 'services/quotes/favouriteQuotesService';

export const FavouriteQuotes: FC = () => {
  const { t } = useTranslation('favouriteQuotes');
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      'favouriteQuotes',
      ({ pageParam = 0 }) => {
        return favouriteQuotesService.getFavourites(pageParam);
      },
      {
        getNextPageParam: (lastPage, pages) =>
          lastPage.length ? pages.length : false
      }
    );

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        if (!isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasNextPage, isFetchingNextPage]);

  return (
    <>
      <HeaderBar />
      <MainContainer title={t('title')}>
        {isLoading && (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner size={2} />
          </div>
        )}
        {data?.pages.map((page, i) => (
          <Fragment key={`page-${i}`}>
            {page.map((quote) => (
              <QuoteCard key={quote._id.toHexString()} quote={quote} />
            ))}
          </Fragment>
        ))}
      </MainContainer>
    </>
  );
};
