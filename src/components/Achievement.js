import PropTypes from 'prop-types';
import React from 'react';

const Achievement = ({id, text, onAchivDelete}) => (
    <li className="lead">
        <span>{text}</span>
        <a href='#' onClick={() => onAchivDelete(id)}>delete</a>
    </li>
)

Achievement.PropTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onAchivDelete: PropTypes.func
}

export default Achievement
