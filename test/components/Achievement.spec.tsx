import expect from 'expect';
import { shallow } from 'enzyme';
import Achievement from '../../src/components/Achievement';

function setup(id, text) {
  const component = shallow(
    <Achievement id={id} text={text} />,
  );

  return { component };
}

describe('Achievement component', () => {
  it('should display text', () => {
    const targetText = 'Test text';
    const { component } = setup(1, targetText);
    expect(component.find('span').text()).toBe(targetText);
  });
});
