import { combineReducers } from 'redux';
import { Type } from './filmsActions';

const filmsReduser = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_FILMS:
      return payload;
    case Type.CREATE_FILM:
      return [...state, payload];
    case Type.DELETE_FILM:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};
const searchFilmReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_SEARCH:
      return payload;
    default:
      return state;
  }
};

const searchActorReduser = (state = '', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_SEARCH_ACTOR:
      return payload;
    default:
      return state;
  }
};

const sortReduser = (state = null, { type, payload }) => {
  switch (type) {
    case Type.SORT_FILMS:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: filmsReduser,
  searchFilm: searchFilmReducer,
  sort: sortReduser,
  searchActor: searchActorReduser,
});
