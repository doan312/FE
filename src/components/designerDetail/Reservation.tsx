import React from 'react'
import ToggleButton from './ToggleButton'
import CustomCalendar from './CustomCalendar'
import TimeSelectBar from './TimeSelectBar'
import ButtonLg from './ButtonLg'
const Reservation: React.FC = () => {
    return (
        <div className='flex flex-col gap-20 p-5 pt-12'>
            <div className='text-body1 font-bold text-gray-1300'>상담 예약</div>
            <ToggleButton />
            <CustomCalendar />
            <TimeSelectBar />

            <ButtonLg text='예약' />
        </div>
    )
}

export default Reservation
