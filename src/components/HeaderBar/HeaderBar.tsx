import { AuthContext } from 'components/App';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IUser } from 'types/IUser';
import { IAppState } from 'types/state/IAppState';

import { navigate } from '@reach/router';

import { HeaderBarContainer } from './HeaderBarContainer';

export const HeaderBar: FC = ({ children }) => {
  const { t } = useTranslation('common');
  const user = useSelector<IAppState, IUser>((state) => state.user);
  const { authService } = useContext(AuthContext);

  return (
    <HeaderBarContainer>
      <div>
        <span className="pr-2">{user.name}</span>
        <button
          onClick={() => {
            authService.logOut();
            navigate('/');
          }}
        >
          {t('log_out')}
        </button>
      </div>
      {children}
    </HeaderBarContainer>
  );
};
