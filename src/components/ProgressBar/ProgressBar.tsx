import React from 'react'
import styled from 'styled-components'

interface propType {
    percentage: number;
}

interface progressBarWidth {
    widthPercent: number;
}
interface displayType {
    shouldDisplay: boolean;
}

const ProgressBarWrapper = styled.div`
    height:30px;
    width: 40%;
    border: 2px solid grey;
    margin-top:30px;
`
const ProgressBarInner = styled.div<progressBarWidth>`
    height:100%;
    background-color: ${props => props.widthPercent > 50 ? 'green' : 'red'};
    width:${props => props.widthPercent}%;
    display:${props => (props.widthPercent > 100 || props.widthPercent < 0) ? 'none' : 'block'};
`
const TextWrapper = styled.h4 <displayType>`
    font-size:20px;
    font-weight: bold;
    color:red;
    text-align: center;
    display : ${props => props.shouldDisplay ? 'block' : 'none'};
`
const ProgressBar: React.FC<propType> = (props) => {
    return (
        <ProgressBarWrapper>
            <ProgressBarInner widthPercent={(props.percentage)}>{(props.percentage)}%</ProgressBarInner>
            <TextWrapper shouldDisplay={props.percentage < 0 || props.percentage > 100 ? true : false}>Please enter a value within the range!</TextWrapper>
        </ProgressBarWrapper >
    )
}
export default ProgressBar