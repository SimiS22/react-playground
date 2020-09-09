import React, { useState, useEffect } from 'react';
import './Clock.scss'

const Clock: React.FC = () => {
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000)
        return () => {
            window.clearInterval(interval)
        }
    }, [])

    const addZero = (value: number) => {
        return value < 10 ? `0` + value : value;
    }

    const hours = addZero(currentDate.getHours());
    const minutes = addZero(currentDate.getMinutes());
    const seconds = addZero(currentDate.getSeconds());

    const secDeg = (((seconds as number) / 60) * 360) + 90;
    const minsDeg = (((minutes as number) / 60) * 360) + 90;
    const hoursDeg = (((hours as number) / 12 * 360)) + 90;

    const findDate = (input: string) => {
        const otherDate = new Date();
        if (input === 'yesterday') {
            otherDate.setDate(otherDate.getDate() - 1)
        }
        else if (input === 'tomorrow') {
            otherDate.setDate(otherDate.getDate() + 1)
        }
        return otherDate;
    }
    const dates = (inputDate: Date) => {
        const day = daysArray[inputDate.getDay() - 1];
        const date = inputDate.getDate();
        const month = monthsArray[inputDate.getMonth()];
        const year = inputDate.getFullYear();

        return `${date} ${month}, ${year} (${day})`
    }

    return (
        <div className='clock'>
            <div className='analogClock'>
                <div className='hand seconds' style={{ transform: `rotate(${secDeg}deg)`, height: '2px', background: 'red' }}></div>
                <div className='hand minutes' style={{ transform: `rotate(${minsDeg}deg)`, height: '4px' }}></div>
                <div className='hand hours' style={{ transform: `rotate(${hoursDeg}deg)`, }}></div>
            </div>
            <div className='digitalClock'>
                {hours} : {minutes} : {seconds}
            </div>
            <div className='day'>
                <div className='dates'>{dates(findDate('yesterday'))}</div>
                <div className='dates' style={{ color: 'blue' }}>{dates(currentDate)}</div>
                <div className='dates'>{dates(findDate('tomorrow'))}</div>
            </div>
        </div>
    )
}
export default Clock