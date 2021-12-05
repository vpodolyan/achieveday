import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Author } from './Author';
import { MakeFavouriteButton } from './MakeFavouriteButton';
import { Title } from './Title';

interface IProps {
  text: string;
  author: string | undefined;
}

export const Quote = memo<IProps>(
  ({ text, author }) => {
    const { t } = useTranslation('common');

    return (
      <>
        <Title>“{text}” &mdash;</Title>
        <div className="d-flex justify-content-center align-items-center">
          <Author>{author || t('uknown')}</Author>
          <MakeFavouriteButton className="ml-2" />
        </div>
      </>
    );
  },
  (prevProps, nextProps) => prevProps.text === nextProps.text
);

Quote.displayName = 'Quote';
