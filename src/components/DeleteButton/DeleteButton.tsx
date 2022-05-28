import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  onClick: (e: MouseEvent) => void;
}

const DeleteIcon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
  transition: color 0.2s;
  color: ${({ theme }) => theme.colors.common.text};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.common.primary};
  }
`;

export const DeleteButton: FC<IProps> = ({ className, onClick }) => {
  return <DeleteIcon className={className} icon={faTimes} onClick={onClick} />;
};
