import * as React from 'react';

interface IProps {
    id: object;
    text: string;
    onAchivDelete: (id: object) => void;
}

const Achievement: React.FC<IProps> = ({ id, text, onAchivDelete }) => (
    <li className="lead">
        <span>{text}</span>
        <a href='#' onClick={() => onAchivDelete(id)}>delete</a>
    </li>
)

export default Achievement
