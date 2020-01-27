import { createSelector } from 'reselect';

export const getStateModal = state => state.modal.modalState;
export const getModalId = state => state.modal.id;
export const getFilms = state => state.films.items;
export const getContainerInfo = state => state.modal.containerInfo;
export const getContainerDelete = state => state.modal.containerDelete;

export const getModalItem = createSelector(
  [getFilms, getModalId],
  (films, id) => {
    return films.filter(film => film.id === id);
  },
);
