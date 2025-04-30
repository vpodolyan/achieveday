import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from 'types/QueryKeys';
import { aiPhrasesService } from '../aiPhrasesService';

export function useQuoteOfDay(shouldFetch: boolean) {
  return useQuery({
    queryKey: [QUERY_KEYS.quoteOfDay],
    enabled: shouldFetch,
    queryFn: () => aiPhrasesService.getQuoteOfDay()
  });
}
