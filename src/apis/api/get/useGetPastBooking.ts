import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'

export const useGetPastBooking = () => {
    return useQuery({
        queryKey: ['pastBooking'],
        queryFn: async () => {
            const res = await authApi.get(`/booking/past`)
            return res.data
        },
    })
}
