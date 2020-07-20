import * as React from "react";
import styled from "styled-components";

import { faTrophy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrophyIcon = styled(FontAwesomeIcon)`
    font-size: 1rem;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
    font-size: 0.8rem;
    transition: color 0.2s;

    &:hover {
        cursor: pointer;
        color: #317eac;
    }
`;

interface IProps {
  id: object;
  text: string;
  onAchivDelete: (id: object) => void;
}

const Achievement: React.FC<IProps> = ({ id, text, onAchivDelete }) => (
    <div className="lead d-flex">
        <div className="d-flex-column align-items-center">
            <TrophyIcon icon={faTrophy} />
            <div></div>
        </div>
        <div className="pl-2">
            {text}
            <DeleteIcon
                className="ml-2 align-middle"
                icon={faTimes}
                onClick={() => onAchivDelete(id)}
            />
        </div>
    </div>
);

export default Achievement;
