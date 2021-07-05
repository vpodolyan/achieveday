import { useContext } from 'react';

import { ThemeManagementContext } from './ThemeManagementProvider';

export function useTheme() {
  return useContext(ThemeManagementContext);
}
