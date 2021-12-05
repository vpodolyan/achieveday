import { faList, faStar } from '@fortawesome/free-solid-svg-icons';
import { Match, navigate } from '@reach/router';
import { AuthContext } from 'components/App';
import { ButtonOutline } from 'components/ButtonOutline/ButtonOutline';
import { ThemeToggle } from 'components/ThemeToggle/ThemeToggle';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IUser } from 'types/IUser';
import { IAppState } from 'types/state/IAppState';
import { paths } from 'utils/paths';
import { HeaderBarContainer } from './HeaderBarContainer';
import { HeaderBarIconButton } from './HeaderBarIconButton';

const UserName = styled.span`
  color: ${({ theme }) => theme.colors.common.userName};
`;

export const HeaderBar: FC = ({ children }) => {
  const { t } = useTranslation('common');
  const user = useSelector<IAppState, IUser>((state) => state.user);
  const { authService } = useContext(AuthContext);

  return (
    <HeaderBarContainer>
      <Match path={paths.favouriteQuotes}>
        {({ match }) => (
          <HeaderBarIconButton
            icon={faStar}
            className="mr-2"
            active={!!match}
            onClick={() => navigate(paths.favouriteQuotes)}
          />
        )}
      </Match>
      <Match path={paths.achievements}>
        {({ match }) => (
          <HeaderBarIconButton
            icon={faList}
            className="mr-4"
            active={!!match}
            onClick={() => navigate(paths.achievements)}
          />
        )}
      </Match>
      <ThemeToggle />
      <UserName className="pr-2 pl-3">{user.name}</UserName>
      <ButtonOutline
        className="mr-2"
        onClick={async () => {
          await authService.logOut();
          navigate('/');
        }}
      >
        {t('log_out')}
      </ButtonOutline>
      {children}
    </HeaderBarContainer>
  );
};
