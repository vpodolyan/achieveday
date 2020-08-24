const initialState = {};

const user = (state = initialState, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...action.payload
    };
  }
  return state;
};

export default user;
