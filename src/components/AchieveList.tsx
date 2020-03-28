import * as React from 'react';
import styled from 'styled-components';

import Achievement from './Achievement';
import IAchievement from 'types/IAchievement';
import Spinner from './Spinner/Spinner';

const List = styled.ul`
  list-style-type: none;
`;

interface IProps {
    achievements: IAchievement[];
    selectedDate: Date;
    loading: boolean;
    onAchivDelete: (id: object) => void;
    getAchievements: (date?: Date) => void;
}

const AchieveList: React.FC<IProps> = ({ achievements, onAchivDelete, getAchievements, selectedDate, loading }) => {
    React.useEffect(
    () => {
        getAchievements(selectedDate);
    }, [selectedDate]);

    return (
        <List>
            {loading && <Spinner size={2} />}
            {achievements && achievements.map(achievement =>
                <Achievement
                    key={achievement._id?.toString()}
                    id={achievement._id}
                    text={achievement.text}
                    onAchivDelete={onAchivDelete}
                />
            )}
        </List>
    );
}

export default AchieveList;
