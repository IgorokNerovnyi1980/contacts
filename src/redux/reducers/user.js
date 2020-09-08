import Type from '../types';

const initialState = {
  email: '',
  profile: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.USER_DATA:
      return {
        ...state,
        email: action.email,
      };
    case Type.USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
