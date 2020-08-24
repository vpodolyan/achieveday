import React, {
  FC, useRef, useEffect, KeyboardEvent
} from 'react';
import Input from 'components/Input';
import styled from 'styled-components';

const EditInput = styled(Input)`
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2rem;
    width: 100%;
`;

interface IProps {
    text: string;
    onChange: (value: string) => void;
    onBlur: (value: string) => void;
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const EditAchievement: FC<IProps> = ({
  text, onChange, onBlur, onKeyPress
}) => {
  const inputRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="pl-2 w-100">
      <EditInput
        ref={inputRef}
        value={text}
        className="lead"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={(e) => {
          onBlur(e.target.value);
        }}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default EditAchievement;
