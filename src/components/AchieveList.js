import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Achievement from './Achievement';

const List = styled.ul`
  list-style-type: none;
`;

const AchieveList = ({ achievements, onAchivDelete }) => (
    <List>
        {achievements.map(achievmnt =>
            <Achievement
                key={achievmnt.id}
                {...achievmnt}
                onAchivDelete={onAchivDelete}
            />
        )}
    </List>
)

AchieveList.propTypes = {
    achievements: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onAchivDelete: PropTypes.func.isRequired
}

export default AchieveList
