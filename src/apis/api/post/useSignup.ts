import { useMutation } from '@tanstack/react-query';
import { baseApi } from '../..';
import { useAccessTokenStore } from '../../../store/useStore';
import { useNavigate } from 'react-router-dom';


export const useSignUp = () => {
  const {setAccessToken} = useAccessTokenStore() 
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (idToken: string) => {
      const { data } = await baseApi.post('/auth/signup?logintype=google', null,{headers: {Authorization: `Bearer ${idToken}`}});
      return data;
    },
    onError: (error) => {
      console.error('api failed', error);
    },
    onSuccess(data) {
      console.log('api success', data);
      if(data.data.isRegistered){
        //accessToken저장
        setAccessToken(data.data.accessToken)
        //home으로
        navigate('/home')
      }
    }});
    return mutation;
};