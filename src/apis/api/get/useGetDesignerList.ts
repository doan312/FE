import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'
import { DesignerListResponse } from '../../../types/designerTypes'
import { Filter } from '../../../store/useStore'
import qs from 'qs'

export const useGetDesignerList = (filter: Filter) => {
    return useQuery<DesignerListResponse>({
        queryKey: ['designers', JSON.stringify(filter)],
        queryFn: async () => {
            const params = { ...filter }

            // meetingMode가 null이면 요청에서 제거
            if (!params.meetingMode) {
                delete params.meetingMode
            }
            if (!params.district) {
                delete params.meetingMode
            }
            // page가 누락되지 않도록 기본값 설정
            params.page = params.page ?? 0

            const res = await authApi.get<DesignerListResponse>(
                '/designer/filter',
                {
                    params,
                    paramsSerializer: (params) =>
                        qs.stringify(params, { arrayFormat: 'repeat' }), // ✅ axios에서 배열을 올바르게 처리
                }
            )

            return res.data
        },
    })
}
