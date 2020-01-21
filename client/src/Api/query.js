import axios from 'axios';

export const CreateFilmOnDB = (url, method = 'POST', body = null) =>
  axios({ method, url, data: { ...body } });

export const GetFilmFromDB = (url, method = 'GET') => axios({ method, url });

export const DeleteFilmbyId = (url, body = null) =>
  axios.delete(url, { data: { ...body } });

export const unLoad = file => {
  const unLoadFile = new FormData();
  unLoadFile.append('file', file);

  return axios.post('api/file', unLoadFile);
};
