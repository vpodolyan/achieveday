import { AchievementsList } from 'components/AchievementsList/AchievementsList';
import { Spinner } from 'components/Spinner/Spinner';
import { FC } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { achievementService } from 'services/achievements/achievementsService';
import styled from 'styled-components';
import { IAchievement } from 'types/IAchievement';
import { IAppState } from 'types/state/IAppState';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 112px;
`;

export const AchievementsForSelectedDate: FC = () => {
  const selectedDate = useSelector<IAppState, Date>(
    (state) => state.datePicker.value
  );

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['achievements', selectedDate], () =>
    achievementService.getAchievements(selectedDate || new Date())
  );

  const updateMutation = useMutation((a: IAchievement) =>
    achievementService.updateAchievement(a)
  );

  const deleteMutation = useMutation(
    (id: string) => achievementService.deleteAchievement(id),
    {
      onSuccess: () => queryClient.invalidateQueries('achievements')
    }
  );

  const handleAchievementDelete = async (id) => {
    deleteMutation.mutate(id);
  };

  const handleAchievementEdit = (achievement: IAchievement) => {
    updateMutation.mutate(achievement);
  };

  return (
    <Container>
      {isLoading ? (
        <div className="pt-5">
          <Spinner size={2} />
        </div>
      ) : (
        <AchievementsList
          achievements={data || []}
          onAchievementDelete={handleAchievementDelete}
          onAchievementEdit={handleAchievementEdit}
        />
      )}
    </Container>
  );
};
