import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { QuoteCard } from 'components/QuoteCard/QuoteCard';
import { Spinner } from 'components/Spinner/Spinner';
import { FC, Fragment, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { favouriteQuotesService } from 'services/quotes/favouriteQuotesService';
import { NoFavouriteQuotesMessage } from './NoFavouriteQuotesMessage';
import { QUERY_KEYS } from 'types/QueryKeys';

export const FavouriteQuotes: FC = () => {
  const { t } = useTranslation('favouriteQuotes');
  const {
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery(
    QUERY_KEYS.favouriteQuotes,
    ({ pageParam = 0 }) => {
      return favouriteQuotesService.getFavourites(pageParam);
    },
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.length ? pages.length : false
    }
  );

  const endOfTheListElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: '100px' }
    );

    if (endOfTheListElement.current) {
      observer.observe(endOfTheListElement.current);
    }

    return () => {
      observer.disconnect();
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
        <NoFavouriteQuotesMessage isDataLoading={isLoading} data={data} />
        {data?.pages.map((page, i) => (
          <Fragment key={`page-${i}`}>
            {page.map((quote) => (
              <QuoteCard
                key={quote._id.toHexString()}
                quote={quote}
                onUnfavourite={() => {
                  refetch();
                }}
              />
            ))}
          </Fragment>
        ))}
        {data?.pages && <div ref={endOfTheListElement}></div>}
      </MainContainer>
    </>
  );
};
