import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Achievement from './Achievement';
import useAchievementActions from 'hooks/useAchievementActions';

const List = styled.ul`
  list-style-type: none;
`;

const AchieveList = ({ achievements, onAchivDelete, getAchievements }) => {
    useEffect(
    () => {
        getAchievements();
    }, []);

    return (
        <List>
            {achievements && achievements.map(achievmnt =>
                <Achievement
                    key={achievmnt._id}
                    {...achievmnt}
                    onAchivDelete={onAchivDelete}
                />
            )}
        </List>
    );
}

AchieveList.propTypes = {
    achievements: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.object.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onAchivDelete: PropTypes.func.isRequired
}

export default AchieveList
