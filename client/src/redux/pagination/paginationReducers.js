import { combineReducers } from 'redux';
import { Type } from './paginationActions';

const currentPageReduser = (state = 1, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_PAGE:
      return payload;
    default:
      return state;
  }
};

const filmsPerPageReduser = (state = 15, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_PER_PAGE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  currentPage: currentPageReduser,
  filmsPerPage: filmsPerPageReduser,
});
