import { Input } from 'components/Input';
import { FC, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { achievementService } from 'services/achievements/achievementsService';
import styled from 'styled-components';
import { IAchievement } from 'types/IAchievement';
import { IUser } from 'types/IUser';
import { QUERY_KEYS } from 'types/QueryKeys';
import { IAppState } from 'types/state/IAppState';

const NewAchievementInput = styled(Input)`
  width: 75%;
`;

const AddAchievementButton = styled.a`
  height: 50px;
  font-size: 28px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.achievementsPage.addButton};
  vertical-align: bottom;

  &:hover {
    text-decoration: none;
  }
`;

export const NewAchievement: FC = () => {
  const [text, setText] = useState('');

  const input = useRef<HTMLInputElement>(null);

  const user = useSelector<IAppState, IUser>((state) => state.user);
  const date = useSelector<IAppState, Date>((state) => state.datePicker.value);

  // const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const addAchievementMutation = useMutation(
    (achievement: IAchievement) =>
      achievementService.addAchievement(achievement),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.achievements });
      }
    }
  );

  const handleAddClick = (e) => {
    e.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    if (!user) {
      return;
    }

    addAchievementMutation.mutate({
      text: trimmedText,
      owner_id: user.id,
      createDate: date,
      _id: undefined
    });

    // dispatch(
    //   addAchievement({ text: trimmedText, owner_id: user.id, createDate: date })
    // );

    if (input && input.current) {
      input.current.focus();
    }

    setText('');
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-center pt-5 pt-md-4">
      <form onSubmit={handleAddClick}>
        <NewAchievementInput
          value={text}
          ref={input}
          onChange={handleInputChange}
        />
        <AddAchievementButton href="#" onClick={handleAddClick}>
          +
        </AddAchievementButton>
      </form>
    </div>
  );
};
