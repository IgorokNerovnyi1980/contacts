import Type from '../types';

const initialState = {
  all: [],
  item: null,
  filtredAll: [],
  contactView: [],
  quantityContacts: 10,
  page: 1,
  perPage: 6,
  totalPages: 0,
  isRow: true,
  currentFilter: '',
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
          ((page * perPage) - perPage), (totalPages === page ? state.all.length + 1 : (page * perPage)),//eslint-disable-line
        ),
      };
    case Type.FILTRED_VIEW:
      return {
        ...state,
        contactView: state.filtredAll.slice(
            ((page * perPage) - perPage), (totalPages === page ? state.all.length + 1 : (page * perPage)),//eslint-disable-line
        ),
      };
    case Type.SET_ITEM:
      return {
        ...state,
        item: state.all.find((user) => user.phone === action.id),
      };
    case Type.SET_ROW:
      return {
        ...state,
        isRow: action.bool,
      };
    case Type.SORT_MALE:
      return {
        ...state,
        currentFilter: 'male',
        filtredAll: state.all.filter((user) => user.gender === 'male'),
      };
    case Type.SORT_FEMALE:
      return {
        ...state,
        currentFilter: 'female',
        filtredAll: state.all.filter((user) => user.gender === 'female'),
      };
    case Type.RESET_FILTER:
      return {
        ...state,
        currentFilter: '',
        filtredAll: [],
      };

    default:
      return state;
  }
};
export default reducer;
