import axios,{AxiosInstance} from 'axios';

export const baseApi:AxiosInstance = axios.create({
  baseURL : `${import.meta.env.VITE_SERVER_URL}/api`,
  timeout: 10000,
})

export const authApi:AxiosInstance = axios.create({
  baseURL : "...",
  headers: {Authorization: `Bearer ...`},
  timeout: 10000,
})