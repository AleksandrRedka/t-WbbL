import { createSelector } from 'reselect';

export const getStateModal = state => state.modal.modalState;
export const getModalId = state => state.modal.id;
export const getFilms = state => state.films.items;

export const getModalItem = createSelector(
  [getFilms, getModalId],
  (films, id) => {
    return films.filter(film => film.id === id);
  },
);
