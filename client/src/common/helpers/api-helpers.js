const axios = require('axios');

import { encodeParams } from './helpers';

const TKN = () => localStorage.getItem('token');

export const baseURL = '/api';

export const headers = { 'Authorization': `Bearer ${TKN()} `};

const instance = axios.create({
  baseURL,
  headers
});

instance.interceptors.response.use(response => {
   return response;
}, error => {
   const status = error.response?.status || 500;
   if (status === 401) {
     window.location = window.location.protocol + '//' + window.location.host + '/login';
   } else {
     return Promise.reject(error);
   }
  return error;
});

const getListas = params => instance.post(`/getList`, encodeParams(params));

const getNotesByList = params => instance.post(`/getNotesByList`, encodeParams(params));

const addList = params => instance.post(`/addList`, encodeParams(params));

const addTask = params => instance.post(`/addNote`, encodeParams(params));

const deleteNote = params => instance.post(`/deleteNote`, encodeParams(params));

const updateTask = params => instance.put(`/updateNote`, encodeParams(params));

const deleteList = params => instance.post(`/deleteList`, encodeParams(params));

const logIn = params => instance.post(`/logIn`, encodeParams(params));

const registrarme = params => instance.post(`/registrarme`, encodeParams(params));

export {
  getListas,
  getNotesByList,
  addList,
  addTask,
  deleteNote,
  updateTask,
  deleteList,
  logIn,
  registrarme
};