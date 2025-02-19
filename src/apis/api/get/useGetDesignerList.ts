import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'
import { DesignerListResponse } from '../../../types/designerTypes'
import { Filter } from '../../../store/useStore'
import qs from 'qs'


export const useGetDesignerList = (filter: Filter) => {
    return useQuery<DesignerListResponse>({
        queryKey: ['designers', JSON.stringify(filter)],
        queryFn: async () => {
            const res = await authApi.get<DesignerListResponse>(
                '/designer/list/filter',
                {
                    params: filter,
                    paramsSerializer: (params) =>
                        qs.stringify(params, { arrayFormat: 'repeat' }), // 배열을 원하는 형식으로 변환
                }
            )
            return res.data
        },
    })
}
