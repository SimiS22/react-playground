import React, { useState } from 'react'
import styled from 'styled-components'

interface displayProps {
    click: boolean
}

const PopUpWrapper = styled.div<displayProps>`
    display: ${props => props.click ? 'none' : 'flex'};
    height:80%;
    width:80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const TextWrapper = styled.h2`
    font-size:20px;
    font-weight: bolder;
    text-align: center;
`
const buttonWrapper = styled.button`
    height:20px;
    width:30%;
`
const PopUp: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(true)
    }
    return (
        <PopUpWrapper click={clicked}>
            <TextWrapper>Please enter a value within the range!</TextWrapper>
            <button onClick={handleOnClick} >Ok</button>
        </PopUpWrapper>
    )
}
export default PopUp