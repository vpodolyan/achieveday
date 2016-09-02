import React, { PropTypes } from 'react'

const Achievement = ({id, text}) => (
    <span>{text}</span>
)

Achievement.PropTypes = {
    text: PropTypes.string.isRequired
}

export default Achievement
