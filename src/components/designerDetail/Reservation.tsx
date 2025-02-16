import React, { useState } from 'react'
import ToggleButton from './ToggleButton'
import CustomCalendar from './CustomCalendar'
import TimeSelectBar from './TimeSelectBar'
const Reservation: React.FC = () => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const handleTimeClick = (time: string) => {
        setSelectedTime(time)
    }

    return (
        <div className='flex flex-col gap-[1.44rem] pb-[2.8rem] pl-[1.25rem] pr-[1.25rem] pt-[2.8rem]'>
            <div className='text-body1 font-bold text-gray-1300'>상담 예약</div>
            <ToggleButton />
            <CustomCalendar />
            <TimeSelectBar
                selectedTime={selectedTime}
                handleTimeClick={handleTimeClick}
            />
            {/* 온오프라인 선택 */}
            {selectedTime !== null && (
                <div className='flex flex-row justify-between'>
                    <button className='w-[48%] border-1 border-gray-500 bg-white text-gray-1300'>
                        직접
                    </button>
                    <button className='w-[48%] border-1 border-gray-500 bg-white text-gray-1300'>
                        온라인
                    </button>
                </div>
            )}
        </div>
    )
}

export default Reservation
