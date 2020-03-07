import * as React from 'react';
import styled from 'styled-components';

import Achievement from './Achievement';
import IAchievement from 'types/IAchievement';

const List = styled.ul`
  list-style-type: none;
`;

interface IProps {
    achievements: IAchievement[];
    selectedDate: Date;
    onAchivDelete: () => void;
    getAchievements: (date?: Date) => void;
}

const AchieveList: React.FC<IProps> = ({ achievements, onAchivDelete, getAchievements, selectedDate }) => {
    React.useEffect(
    () => {
        getAchievements(selectedDate);
    }, [selectedDate]);

    return (
        <List>
            {achievements && achievements.map(achievement =>
                <Achievement
                    key={achievement._id?.toString()}
                    {...achievement}
                    onAchivDelete={onAchivDelete}
                />
            )}
        </List>
    );
}

export default AchieveList;
