import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import { faTimes, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EditAchievement } from './EditAchievement';

const TrophyIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.common.text};
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.common.primary};
  }
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.common.text};
`;

interface IProps {
  id: object;
  text: string;
  onAchivDelete: (id: object) => void;
  onApplyChanges: (text: string) => void;
}

export const Achievement: FC<IProps> = ({
  id,
  text,
  onAchivDelete,
  onApplyChanges
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const applyChanges = useCallback((value: string) => {
    onApplyChanges(value);
    setIsEditMode(false);
  }, []);

  return (
    <div className="lead d-flex" onClick={() => setIsEditMode(true)}>
      <div className="d-flex-column align-items-center">
        <TrophyIcon icon={faTrophy} />
        <div />
      </div>
      {isEditMode ? (
        <EditAchievement
          text={textValue}
          onChange={(value) => {
            setTextValue(value);
          }}
          onBlur={(value) => {
            applyChanges(value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              applyChanges(textValue);
            }
          }}
        />
      ) : (
        <TextContainer className="pl-2">
          {textValue}
          <DeleteIcon
            className="ml-2 align-middle"
            icon={faTimes}
            onClick={(e) => {
              e.stopPropagation();
              onAchivDelete(id);
            }}
          />
        </TextContainer>
      )}
    </div>
  );
};
