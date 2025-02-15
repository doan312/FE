import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const CustomCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Value>(new Date()) // 초기값은 현 날짜
    return (
        <div>
            <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
    )
}

export default CustomCalendar
