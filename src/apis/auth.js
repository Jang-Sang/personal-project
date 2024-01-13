import { axiosInstance } from './core';

const AuthApi = {
  // event
  async getEventList() {
    const res = await axiosInstance.get('/news/event');
    return res.data;
  },
};
export default AuthApi;

// CORS  오류 진행중
// const res = await axiosInstance.get('/news/event');
// 여기 문제라는데 왜 그런지 모르겠음
