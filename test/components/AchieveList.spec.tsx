import expect from 'expect';
import { shallow } from 'enzyme';
import { AchievementsList } from '../../src/components/AchievementsList/AchievementsList';

function setup(achievements) {
  const component = shallow(
    <AchievementsList achievements={achievements || []} onAchievementDelete={() => {}} onAchievementEdit={() => {}} />,
  );

  return { component };
}

describe('AchieveList component', () => {
  it('should contain right count of the achievements', () => {
    const achievements = [{ id: 1, text: 'Super achievement' }, { id: 2, text: 'OMG I did it' }];
    const { component } = setup(achievements);
    expect(component.find('Achievement').length).toBe(achievements.length);
  });
});
