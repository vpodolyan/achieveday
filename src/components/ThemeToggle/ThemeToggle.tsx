import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from 'theming/useTheme';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.common.themeToggleBackground};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
`;

const Toggle = styled.div`
  background-color: ${({ theme }) => theme.colors.common.themeToggle};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: ${(props: { value: boolean }) =>
    props.value ? 'translate(24px)' : 'translateX(0px)'};
  transition: transform 0.2s linear;
`;

const SunIcon = styled(FontAwesomeIcon)`
  color: #f39c12;
`;

const MoonIcon = styled(FontAwesomeIcon)`
  color: #f1c40f;
`;

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState(theme.name === 'dark');

  useEffect(() => {
    setTheme(value ? 'dark' : 'light');
  }, [value]);

  return (
    <Container
      onClick={() => {
        setValue(!value);
      }}
    >
      <MoonIcon icon={faMoon} />
      <SunIcon icon={faSun} />
      <Toggle value={value} />
    </Container>
  );
};
