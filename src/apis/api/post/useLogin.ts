import { useMutation } from '@tanstack/react-query';
import { baseApi } from '../..';
import { useAccessTokenStore } from '../../../store/useStore';
import { useSignUp } from './useSignup';

export const useLogin = () => {
  const {setAccessToken} = useAccessTokenStore() 
  const signup = useSignUp();
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async (idToken: string) => {
      const { data } = await baseApi.post('/auth/login?logintype=google', null,{headers: {Authorization: `Bearer ${idToken}`}});
      return data;
    },
    onError: (error) => {
      console.error('api failed', error);
    },
    onSuccess(data,idToken) {
      console.log('api success', data);
      if(data.data.isRegistered){
        //accessToken저장
        setAccessToken(data.data.accessToken)
      }else{
        signup.mutate(idToken)
      }
    }})
    return mutation;
};