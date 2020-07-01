import * as React from 'react';

interface IProps {
    id: object;
    text: string;
    onAchivDelete: (id: object) => void;
}

const Achievement: React.FC<IProps> = ({ id, text, onAchivDelete }) => (
    <div className="lead d-flex">
        <div className=''>{text}</div>
        <div className='col-2'>
            <a className='ml-1' href='#' onClick={() => onAchivDelete(id)}>delete</a>
        </div>
    </div>
)

export default Achievement
