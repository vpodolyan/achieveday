import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { QUERY_KEYS } from 'types/QueryKeys';
import { IAppState } from 'types/state/IAppState';
import { achievementService } from '../achievementsService';

export function useAchievements() {
  const selectedDate = useSelector<IAppState, Date>(
    (state) => state.datePicker.value
  );

  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.achievements, selectedDate],
    queryFn: () =>
      achievementService.getAchievements(selectedDate || new Date())
  });

  return { isLoading, data };
}
