// import axios from 'axios';
// import AuthApi from './auth';
// import TokenRepository from 'repository/token-repository';

// export const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL,
//   headers: {
//     'content-type': 'application/json;charset-UTF-8',
//     accept: 'application/json',
//     Authorization: `bearer ${TokenRepository.getToken()}`,
//   },
//   withCredentials: true,
// });

// axiosInstance().interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     // 세션 만료
//     if (error.response.status === 403) {
//       await AuthApi.signOut();
//       TokenRepository.deleteToken();
//       alert('세션이 만료되었습니다.');
//       window.location.href = '/';
//     }
//   },
// );

import axios from 'axios';
import AuthApi from './auth';
import TokenRepository from 'repository/token-repository';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
    Authorization: `bearer ${TokenRepository.getToken()}`,
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 403) {
      await AuthApi.signOut();
      TokenRepository.deleteToken();
      alert('세션이 만료되었습니다.');
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);
