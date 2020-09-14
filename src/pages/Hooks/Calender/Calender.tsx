import React, { useState, useEffect } from 'react'
import { daysArray, monthsArray } from '../../../data'
import './Calender.scss'

const Calender: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const currentMonthIndex = currentDate.getMonth()
    const currentMonth = monthsArray[currentMonthIndex].month;
    const currentYear = currentDate.getFullYear();
    let numberOfDays = monthsArray[currentMonthIndex].days;
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 3600000);
        window.clearInterval(interval)
    }, [])

    let datesArray: (number | string)[] = []
    for (let i = 1; i <= numberOfDays; i++) {
        datesArray.push(i)
    }
    const getFirstDay = new Date();
    const first = new Date(getFirstDay.setDate(1))
    const firstDay = first.getDay();

    if (firstDay >= 1) {
        for (let i = 1; i <= firstDay; i++) {
            datesArray.unshift('')
        }
    }
    return (
        <div className='calenderWrapper'>
            <h1>{currentMonth}, {currentYear}</h1>
            <div className='wrapper'>
                {daysArray.map((day, index) => {
                    return (
                        <div className='days' key={index}>{day}</div>
                    )
                }
                )}
            </div>
            <div className='datesWrapper'>
                {
                    datesArray.map((date) => {
                        return (
                            <div className={currentDate.getDate() === date ? 'date active' : 'date'}>{
                                date
                            }</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Calender