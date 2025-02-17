import axios,{AxiosInstance} from 'axios';
import { useAccessTokenStore } from '../store/useStore';
import { useRefresh } from './api/post/useRefresh';


export const baseApi:AxiosInstance = axios.create({
  baseURL : `${import.meta.env.VITE_SERVER_URL}/api`,
  withCredentials: true,//쿠키 허용
  timeout: 10000,
})

export const authApi:AxiosInstance = axios.create({
  baseURL : `${import.meta.env.VITE_SERVER_URL}/api`,
  withCredentials: true,//쿠키 허용
  timeout: 10000,
})

//요청 인터셉터
authApi.interceptors.request.use(
  (config) => {
    const accessToken = useAccessTokenStore.getState().accessToken; // getState() 바로 사용 가능!
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const { mutateAsync } = useRefresh(); // useRefresh 훅 호출
      
      try {
        await mutateAsync(); // 리프레시 토큰 요청
        return authApi.request(error.config); // 원래 요청 재시도
      } catch (refreshError) {
        console.error('리프레시 토큰 실패', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);