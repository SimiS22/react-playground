import React, { useEffect } from 'react'
import './Clock.scss'

const tick = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const secondDegrees = ((seconds / 60) * 360);
}

const Clock: React.FC = () => {


    return (
        <div className='clock'>
            <div className='clock-face'>
                <div className='hand hour-hand'></div>
                <div className='hand minute-hand'></div>
                <div className='hand second-hand'></div>
            </div>
        </div>
    )
}
export default Clock