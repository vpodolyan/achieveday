import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  active?: boolean;
  className?: string;
  icon: IconProp;
  onClick: () => void;
}

const StyledIcon = styled(FontAwesomeIcon)<{ active }>`
  color: ${({ active, theme }) =>
    active ? theme.colors.common.primary : theme.colors.common.primaryAlt};
  font-size: 1.1em;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.common.primary};
  }
`;

export const HeaderBarIconButton: FC<IProps> = ({
  active,
  className,
  icon,
  onClick
}) => (
  <StyledIcon
    active={active}
    icon={icon}
    className={className}
    onClick={onClick}
  />
);
