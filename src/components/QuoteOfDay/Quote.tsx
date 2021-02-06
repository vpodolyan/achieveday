import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Author from './Author';
import Title from './Title';

interface IProps {
  text: string;
  author: string | undefined;
}

export const Quote = memo<IProps>(({ text, author }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Title>
        “
        {text}
        ” &mdash;
      </Title>
      <Author>{author || t('uknown')}</Author>
    </>
  );
});

Quote.displayName = 'Quote';
