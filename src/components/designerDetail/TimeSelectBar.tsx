import React, { useState } from 'react'
const TimeSelectBar: React.FC = () => {
    const timeTable = [
        '오전 12:00',
        '오후 12:30',
        '오후 1:00',
        '오후 1:30',
        '오후 5:00',
        '오후 6:00',
        '오후 7:00',
        '오후 8:00',
        '오후 9:00',
    ]

    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const handleTimeClick = (time: string) => {
        setSelectedTime(time)
    }

    return (
        <div className='flex flex-row gap-15 overflow-scroll'>
            {timeTable.map((time, index) => (
                <button
                    key={index}
                    onClick={() => handleTimeClick(time)}
                    className={`h-9 min-w-75 rounded-xl border-1 border-gray-500 bg-white p-2 text-center text-caption font-normal text-gray-1300 transition ${
                        selectedTime === time ? 'bg-purple-300 text-white' : ''
                    }`}>
                    {time}
                </button>
            ))}
        </div>
    )
}

export default TimeSelectBar
