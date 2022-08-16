const axios = require('axios');

import { encodeParams } from './helpers';

const TKN = () => sessionStorage.getItem('tkn');

export const baseURL = '/api';

export const headers = { 'Authorization': `Bearer ${TKN()} `};

const instance = axios.create({
  baseURL,
  headers
});

// instance.interceptors.response.use(response => {
//   return response;
// }, error => {
//   const status = error.response?.status || 500;
//   if (status === 401) {
//     window.location = window.location.protocol + '//' + window.location.host + '/login'
//   } else {
//     return Promise.reject(error);
//   }
//  return error;
// });

const getSaludo = user => instance.get(`/saludo`, encodeParams(user));

export {
  getSaludo
};