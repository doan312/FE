import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'

export const useGetDesignerInfo =()=>{
  return useQuery({queryKey:['designerInfo'],queryFn: async () => {
    const designerId = '2'
    const res = await authApi.get(`/designer/${designerId}`)
    return res
  }})
}
