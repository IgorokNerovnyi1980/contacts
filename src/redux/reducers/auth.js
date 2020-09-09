import Type from '../types';

const initialState = {
  isLogged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.USER_AUTH:
      return {
        ...state,
        isLogged: action.auth,
      };
    case Type.USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};
export default reducer;
