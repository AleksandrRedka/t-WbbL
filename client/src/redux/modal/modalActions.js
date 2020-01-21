export const Type = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_ID: 'ADD_ID',
  DELETE_ID: 'DELETE_ID',
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
