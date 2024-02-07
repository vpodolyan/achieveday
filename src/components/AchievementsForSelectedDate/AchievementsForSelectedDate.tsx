import { AchievementsList } from 'components/AchievementsList/AchievementsList';
import { Spinner } from 'components/Spinner/Spinner';
import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { achievementService } from 'services/achievements/achievementsService';
import { useAchievements } from 'services/achievements/hooks/useAchievements';
import styled from 'styled-components';
import { IAchievement } from 'types/IAchievement';
import { QUERY_KEYS } from 'types/QueryKeys';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 112px;
`;

export const AchievementsForSelectedDate: FC = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useAchievements();

  const updateMutation = useMutation((a: IAchievement) =>
    achievementService.updateAchievement(a)
  );

  const deleteMutation = useMutation(
    (id: string) => achievementService.deleteAchievement(id),
    {
      onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.achievements)
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
