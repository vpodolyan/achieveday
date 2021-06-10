import { AuthContext } from 'components/App';
import { ButtonOutline } from 'components/ButtonOutline/ButtonOutline';
import { ThemeToggle } from 'components/ThemeToggle/ThemeToggle';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IUser } from 'types/IUser';
import { IAppState } from 'types/state/IAppState';

import { navigate } from '@reach/router';

import { HeaderBarContainer } from './HeaderBarContainer';

const UserName = styled.span`
  color: ${({ theme }) => theme.colors.common.userName};
`;

export const HeaderBar: FC = ({ children }) => {
  const { t } = useTranslation('common');
  const user = useSelector<IAppState, IUser>((state) => state.user);
  const { authService } = useContext(AuthContext);

  return (
    <HeaderBarContainer>
      <ThemeToggle />
      <UserName className="pr-2 pl-3">{user.name}</UserName>
      <ButtonOutline
        className="mr-2"
        onClick={() => {
          authService.logOut();
          navigate('/');
        }}
      >
        {t('log_out')}
      </ButtonOutline>
      {children}
    </HeaderBarContainer>
  );
};
