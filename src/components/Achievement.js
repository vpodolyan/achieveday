import PropTypes from 'prop-types';
import React from 'react';

const Achievement = ({id, text, onAchivDelete}) => (
    <li>
        <span>{text}</span>
        <a href='#' onClick={() => onAchivDelete(id)}>delete</a>
    </li>
)

Achievement.PropTypes = {
    text: PropTypes.string.isRequired
}

export default Achievement
