import axios from 'axios';
import AuthApi from './auth';

export const axioslostarkInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    accept: 'application/json',
    Authorization: `bearer ${REACT_APP_API_TOKEN}`,
  },
  withCredentials: true,
});
