import Type from '../types';

const initialState = {
  all: [],
  item: null,
  contactView: [],
  quantityContacts: 10,
  page: 6,
  perPage: 6,
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  const {
    page, perPage, totalPages,
  } = state;
  switch (action.type) {
    case Type.USER_DATA:
      return {
        ...state,
        quantityContacts: action.quantity,
      };
    case Type.TOTAL_PAGE:
      return {
        ...state,
        totalPages: Math.ceil(state.quantityContacts / state.perPage),
      };
    case Type.GET_CONTACTS:
      return {
        ...state,
        all: action.payload,
      };
    case Type.USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case Type.CHAGE_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case Type.VIEW_PAGE:
      return {
        ...state,
        contactView: state.all.slice(
          ((page * perPage) - perPage), (totalPages === page ? state.all.length + 1 : (page * perPage)),
        ),
      };
    default:
      return state;
  }
};
export default reducer;
