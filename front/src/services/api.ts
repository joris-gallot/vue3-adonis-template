// import { store } from '@/store/index'
import axios, { AxiosInstance } from 'axios';

// TODO: make it works
// axios.interceptors.request.use(
//   (response) => {
//     console.log('res', response)
//     return response
//   },
//   (error) => {
//     console.log('err', error)
//   }
// )

export default (): AxiosInstance => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // if (store.state.token) {
  //   api.defaults.headers.common.Authorization = `Bearer ${store.state.token}`
  // }

  return api;
};
