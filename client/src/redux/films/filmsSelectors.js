import { createSelector } from 'reselect';

export const getFilms = state => state.films.items;
export const getSearchFilm = state => state.films.searchFilm;
export const getSearchActor = state => state.films.searchActor;
export const getValueSort = state => state.films.sort;
export const getCurrentPage = state => state.pagination.currentPage;
export const getFilmsPerPage = state => state.pagination.filmsPerPage;

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
          return foundFilms.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
        // ? // a.title.toLowerCase() <
        // b.title.toLowerCase((a, b) => a.localeCompare(b))
        //   -1
        // : 1;

        case 'highttolow':
          return foundFilms.sort((a, b) => {
            return b.title.localeCompare(a.title);
          });
        // ? // b.title.toLowerCase() >
        // a.title.toLowerCase((a, b) => b.localeCompare(a))
        //   1
        // : -1;
        default:
          return foundFilms;
      }
    }
    return films;
  },
);

export const getCurrentFilms = createSelector(
  [getFilmsForShow, getCurrentPage, getFilmsPerPage],
  (films, currentPage, filmsPerPage) => {
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;

    return films.slice(indexOfFirstFilm, indexOfLastFilm);
  },
);
