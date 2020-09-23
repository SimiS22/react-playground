import React from 'react'
import styled from 'styled-components'

interface propType {
    percentage: number;
}

interface progressBarWidth {
    widthPercent: number
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
`
const ProgressBar: React.FC<propType> = (props) => {
    return (
        <ProgressBarWrapper>
            <ProgressBarInner widthPercent={(props.percentage)}>{(props.percentage)}%</ProgressBarInner>
        </ProgressBarWrapper >
    )
}
export default ProgressBar