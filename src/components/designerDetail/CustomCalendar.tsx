import React, { useState } from 'react'
import Calendar from 'react-calendar'
import '../../styles/calendar.css'
import dayjs from 'dayjs'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const CustomCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Value>(new Date()) // 초기값은 현 날짜
    const handleSelect = (value: Value) => {
        console.log(value)
        setSelectedDate(value)
    }
    return (
        <div>
            <Calendar
                calendarType='gregory'
                view='month'
                locale='ko'
                formatMonthYear={(local, date) => dayjs(date).format('YYYY.MM')}
                formatDay={(local, date) => dayjs(date).format('D')}
                onChange={handleSelect}
                value={selectedDate}
                prev2Label={null}
                next2Label={null}
                showNeighboringMonth={false}
            />
        </div>
    )
}

export default CustomCalendar
