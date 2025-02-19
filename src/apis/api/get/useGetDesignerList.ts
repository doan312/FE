import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'
import { DesignerListResponse } from '../../../types/designerTypes'

export const useGetDesignerList = (filters: {
    districts: string
    meetingModes: string
    categories: string
    page: number
    size: number
}) => {
    return useQuery<DesignerListResponse>({
        queryKey: ['designers', JSON.stringify(filters)],
        queryFn: async () => {
            const res = await authApi.get<DesignerListResponse>(
                '/designer/list/filter',
                {
                    params: filters,
                }
            )
            return res.data
        },
    })
}
