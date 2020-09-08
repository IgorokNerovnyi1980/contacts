import Type from '../types';

const initialState = {
  email: '',
  quantityContacts: 10,
  profile: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.USER_DATA:
      return {
        ...state,
        email: action.email,
        quantityContacts: action.quantity,
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
