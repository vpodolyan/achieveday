import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Author } from './Author';
import { Title } from './Title';

interface IProps {
  text: string;
  author: string | undefined;
}

const QuteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
`;

export const Quote = memo<IProps>(
  ({ text, author }) => {
    const { t } = useTranslation('common');

    return (
      <>
        <Title>“{text}” &mdash;</Title>
        <QuteWrapper>
          <Author>{author || t('uknown')}</Author>
        </QuteWrapper>
      </>
    );
  },
  (prevProps, nextProps) => prevProps.text === nextProps.text
);

Quote.displayName = 'Quote';
