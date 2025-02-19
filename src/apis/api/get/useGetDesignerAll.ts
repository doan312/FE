import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'

export const useGetDesignerAll = () => {
    return useQuery({
        queryKey: ['designers'],
        queryFn: async () => {
            const res = await authApi.get(`/designer/list/all`)
            return res.data // 응답 데이터 전체 반환
        },
        select: (response) => response.data, // `data` 배열만 추출
    })
}
