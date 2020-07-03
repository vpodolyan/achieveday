import * as React from 'react';
import styled from 'styled-components';

import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TrophyIcon = styled(FontAwesomeIcon)`
    font-size: 1rem;
`;

interface IProps {
    id: object;
    text: string;
    onAchivDelete: (id: object) => void;
}

const Achievement: React.FC<IProps> = ({ id, text, onAchivDelete }) => (
    <div className="lead d-flex align-items-center">
        <TrophyIcon icon={faTrophy} />
        <div className='pl-1'>{text}</div>
        <div className='col-2'>
            <a className='ml-1' href='#' onClick={() => onAchivDelete(id)}>delete</a>
        </div>
    </div>
)

export default Achievement
