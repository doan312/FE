import React from 'react'
import ToggleButton from './ToggleButton'
import CustomCalendar from './CustomCalendar'
import TimeSelectBar from './TimeSelectBar'
const Reservation: React.FC = () => {
    return (
        <div className='flex flex-col gap-20 p-5 pt-12'>
            <div className='text-body1 font-bold text-gray-1300'>상담 예약</div>
            <ToggleButton />
            <CustomCalendar />
            <TimeSelectBar />
        </div>
    )
}

export default Reservation
