export const Type = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_ID: 'ADD_ID',
  DELETE_ID: 'DELETE_ID',
  SHOW_INFO: 'SHOW_INFO',
  HIDE_INFO: 'HIDE_INFO',
  SHOW_DELETE: 'SHOW_DELETE',
  HIDE_DELETE: 'HIDE_DELETE',
};

export const open = () => ({
  type: Type.OPEN_MODAL,
  payload: true,
});

export const close = () => ({
  type: Type.CLOSE_MODAL,
  payload: false,
});

export const addId = id => ({
  type: Type.ADD_ID,
  payload: id,
});

export const deleteId = () => ({
  type: Type.DELETE_ID,
  payload: null,
});

export const openInfo = () => ({
  type: Type.SHOW_INFO,
  payload: true,
});

export const closeInfo = () => ({
  type: Type.HIDE_INFO,
  payload: false,
});

export const openDelete = () => ({
  type: Type.SHOW_DELETE,
  payload: true,
});

export const closeDelete = () => ({
  type: Type.HIDE_DELETE,
  payload: false,
});
