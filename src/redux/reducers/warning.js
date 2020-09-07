import Type from '../types';

const initialState = {
  message: null,
  type: 'success',

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.SHOW_WARNING:
      return {
        ...state,
        message: action.message,
        type: action.typeWarning,
      };
    case Type.REMOVE_WARNING:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
export default reducer;
