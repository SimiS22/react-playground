import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`
const HeadingWrapper = styled.h1`
    test-align: center;
    font-size :100px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
`
const Button = styled.div`
    display: flex;
    width : 30%;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight:800;
    height: 60px;
    margin :40px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    border-radius: 16px;
`

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('')
    const handlePlusClick = () => {
        setCount(count + 1);
    }
    const handleMinusClick = () => {
        setCount(count - 1)
    }
    return (
        <CounterWrapper>
            <HeadingWrapper>{count}</HeadingWrapper>
            <ButtonWrapper>
                <Button onClick={handlePlusClick}>+</Button>
                <Button onClick={handleMinusClick}>-</Button>
            </ButtonWrapper>
        </CounterWrapper>
    )

}

export default Counter