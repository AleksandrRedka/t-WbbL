export const Type = {
  FETCH_FILMS: 'FETCH_FILMS',
  DELETE_FILM: 'DELETE_FILM',
  SORT_FILMS: 'SORT_FILM',
  CREATE_FILM: 'CREATE_FILM',
  SEARCH_FILM: 'SEARCH_FILM',
  CHANGE_SEARCH: 'CHANGE_SEARCH',
  CHANGE_SEARCH_ACTOR: 'CHANGE_SEARCH_ACTOR',
};

export const fetchFilms = films => ({
  type: Type.FETCH_FILMS,
  payload: films,
});

export const create = item => ({
  type: Type.CREATE_FILM,
  payload: item,
});

export const sortFilms = value => ({
  type: Type.SORT_FILMS,
  payload: value,
});

export const search = value => ({
  type: Type.SEARCH_FILM,
  payload: value,
});

export const deleteFilm = id => ({
  type: Type.DELETE_FILM,
  payload: id,
});

export const changeSearch = value => ({
  type: Type.CHANGE_SEARCH,
  payload: value,
});

export const changeSearchActor = value => ({
  type: Type.CHANGE_SEARCH_ACTOR,
  payload: value,
});
