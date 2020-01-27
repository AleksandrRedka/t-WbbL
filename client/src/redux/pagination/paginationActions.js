export const Type = {
  CHANGE_PAGE: 'CHANGE_PAGE',
};

export const changePage = page => ({
  type: Type.CHANGE_PAGE,
  payload: page,
});
