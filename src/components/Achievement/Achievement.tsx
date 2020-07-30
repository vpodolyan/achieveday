import React, { FC, useState } from "react";
import styled from "styled-components";

import { faTrophy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditAchievement from "./EditAchievement";

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
    onApplyChanges: (text: string) => void;
}

const Achievement: FC<IProps> = ({ id, text, onAchivDelete, onApplyChanges }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [textValue, setTextValue] = useState(text);

    return (
        <div className="lead d-flex" onClick={() => setIsEditMode(true)}>
            <div className="d-flex-column align-items-center">
                <TrophyIcon icon={faTrophy} />
                <div></div>
            </div>
            {isEditMode ? (
                <EditAchievement
                    text={textValue}
                    onChange={(value) => {
                        setTextValue(value);
                     }}
                     onBlur={(value) => {
                        onApplyChanges(value);
                        setIsEditMode(false);
                     }}
                />
            ) : (
                <div className="pl-2">
                    {textValue}
                    <DeleteIcon
                        className="ml-2 align-middle"
                        icon={faTimes}
                        onClick={(e) => {
                            e.stopPropagation();
                            onAchivDelete(id);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Achievement;
