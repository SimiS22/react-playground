import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const handlePlusClick = () => {
        setCount(count + 1);
    }
    const handleMinusClick = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <div className='buttons'>
                <button onClick={handlePlusClick}>+</button>
                <button onClick={handleMinusClick}>-</button>
            </div>
        </div>
    )

}

export default Counter