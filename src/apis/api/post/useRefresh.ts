import { useMutation } from '@tanstack/react-query';
import { baseApi } from '../..';
import { useAccessTokenStore } from '../../../store/useStore';

export const useRefresh = () => {
  const {setAccessToken} = useAccessTokenStore() 
  const mutation = useMutation({
    mutationKey: ['refresh'],
    mutationFn: async () => {
      const { data } = await baseApi.post('/auth/refresh', null,);
      return data;
    },
    onError: (error) => {
      console.error('api failed', error);
    },
    onSuccess(data) {
      console.log('api success', data);
      if(data.data.isRegistered){
        //accessToken 저장
        setAccessToken(data.data.accessToken) 
      }
    }});
    return mutation;
};