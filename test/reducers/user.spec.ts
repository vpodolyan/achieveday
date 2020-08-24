import expect from 'expect';
import { setUser } from '../../src/actions';
import { default as userReducer } from '../../src/reducers/user';

describe('user reducer', () => {
  it('should set user', () => {
    const beforeState = null;
    const user = { id: 1 };
    const afterState = user;

    expect(userReducer(beforeState, setUser(user))).toEqual(afterState);
  });
});
