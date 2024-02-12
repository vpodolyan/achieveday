import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EditAchievement } from './EditAchievement';
import { DeleteButton } from 'components/DeleteButton/DeleteButton';

const TrophyIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.common.text};
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.common.text};
`;

interface IProps {
  id: object;
  text: string;
  onAchievementDelete: (id: object) => void;
  onApplyChanges: (text: string) => void;
}

export const Achievement: FC<IProps> = ({
  id,
  text,
  onAchievementDelete,
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
          <DeleteButton
            className="ml-2 align-middle"
            onClick={(e) => {
              e.stopPropagation();
              onAchievementDelete(id);
            }}
          />
        </TextContainer>
      )}
    </div>
  );
};
