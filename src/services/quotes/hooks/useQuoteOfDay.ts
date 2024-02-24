import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from 'types/QueryKeys';
import { quotesService } from '../quotesService';

export function useQuoteOfDay(shouldFetch: boolean) {
  return useQuery({
    queryKey: [QUERY_KEYS.quoteOfDay],
    enabled: shouldFetch,
    queryFn: () => quotesService.getQuoteOfDay()
  });
}
