import { useEffect, FC } from 'react';
import styled from 'styled-components';

import IAchievement from 'types/IAchievement';
import Achievement from '../Achievement/Achievement';
import Spinner from '../Spinner/Spinner';

const List = styled.div`
    line-height: 2rem;
`;

interface IProps {
    achievements: IAchievement[];
    selectedDate: Date;
    loading: boolean;
    onAchievementDelete: (id: object) => void;
    getAchievements: (date?: Date) => void;
    onAchievementEdit: (achievement: IAchievement) => void;
}

export const AchievementsList: FC<IProps> = ({
  achievements, onAchievementDelete, getAchievements, onAchievementEdit, selectedDate, loading
}) => {
  useEffect(
    () => {
      getAchievements(selectedDate);
    }, [selectedDate]
  );

  return (
    <div className="d-flex justify-content-center">
      {loading ? (
        <div className="pt-5">
          <Spinner size={2} />
        </div>
      ) : (
        <List className="p-0 pt-4 pt-md-5 d-flex-column col-sm-12 col-md-8">
          {achievements &&
              achievements.map((achievement) => (
                <Achievement
                  key={achievement._id?.toString()}
                  id={achievement._id}
                  text={achievement.text}
                  onAchivDelete={onAchievementDelete}
                  onApplyChanges={(text) => onAchievementEdit({ ...achievement, text })}
                />
              ))}
        </List>
      )}
    </div>
  );
};
