import React from 'react'
import { useReservationCompleteStore } from '../../store/useReservationCompleteStore'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

const ReservationInfo: React.FC = () => {
    const { bookingDate, bookingTime, meetingType } =
        useReservationCompleteStore()
    const isOnline = meetingType === 'REMOTE'

    // 날짜와 시간을 포맷팅
    const formattedDate = dayjs(bookingDate).locale('ko').format('MM.DD(ddd)')
    const formattedTime = dayjs(`${bookingDate}T${bookingTime}`)
        .locale('ko')
        .format('A h:mm')

    return (
        <div className='mx-auto mt-[16px] inline-flex w-fit rounded-[16px] border-[1px] border-gray-500 bg-transparent p-[16px]'>
            {/* 한 줄 정렬 */}
            <div className='flex items-center gap-x-[8px] whitespace-nowrap'>
                {isOnline ? (
                    <span className='mr-[4px] rounded-[6px] bg-blue-100 px-[8px] py-[4px] text-[14px] font-semibold text-blue-600'>
                        온라인
                    </span>
                ) : (
                    <span
                        className='mr-[4px] rounded-[6px] px-[8px] py-[4px] text-[14px] font-semibold'
                        style={{
                            backgroundColor: '#FFECEC',
                            color: '#FE6E81',
                        }}>
                        직접
                    </span>
                )}
                <p className='text-[18px] font-semibold text-gray-950'>
                    {formattedDate} {formattedTime}
                </p>
            </div>
        </div>
    )
}

export default ReservationInfo
