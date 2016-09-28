import React, { PropTypes } from 'react'

const Achievement = ({id, text}) => (
    <li>{text}</li>
)

Achievement.PropTypes = {
    text: PropTypes.string.isRequired
}

export default Achievement
