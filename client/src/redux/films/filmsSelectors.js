import { createSelector } from 'reselect';

export const getFilms = state => state.films.items;
export const getSearchFilm = state => state.films.searchFilm;
export const getSearchActor = state => state.films.searchActor;
export const getValueSort = state => state.films.sort;

export const getFilmsForShow = createSelector(
  [getFilms, getSearchFilm, getValueSort, getSearchActor],
  (films, valueFilm, sortFilms, valueActor) => {
    if (films.length > 1) {
      const foundFilms = films
        .filter(film =>
          film.title
            .trim()
            .toLowerCase()
            .includes(valueFilm.trim().toLowerCase()),
        )
        .filter(film =>
          film.actors
            .trim()
            .toLowerCase()
            .includes(valueActor.trim().toLowerCase()),
        );
      switch (sortFilms) {
        case 'lowtohight':
          return foundFilms.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1,
          );
        case 'highttolow':
          return foundFilms.sort((a, b) =>
            b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1,
          );
        default:
          return foundFilms;
      }
    }
    return films;
  },
);
