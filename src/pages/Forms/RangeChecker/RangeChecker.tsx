import React, { useState } from 'react'
import Input from '../../../components/Input/Input'
import ProgressBar from '../../../components/ProgressBar/ProgressBar'
import styled from 'styled-components'

const RangeCheckerWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
`

const RangeChecker: React.FC = () => {
    const [value, setValue] = useState<number | string>('')
    const [maxValue, setMaxValue] = useState<number | string>('')
    const [minValue, setMinValue] = useState<number | string>('')

    const handleOnChangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.target.value))
    }
    const handleOnChangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.target.value));
    }
    const handleOnChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value))
    }
    let inputs = [
        { inputType: 'number', placeholder: 'Enter the minimum value', label: 'Minimum Value', value: minValue, onChange: handleOnChangeMin },
        { inputType: 'number', placeholder: 'Enter the maximum value', label: 'Maximum Value', value: maxValue, onChange: handleOnChangeMax },
        { inputType: 'number', placeholder: 'Enter the value here', label: 'Enter the value', value: value, onChange: handleOnChangeValue }
    ]

    let percentage;
    if (value === '') {
        percentage = 0;
    }
    else {
        let range = (maxValue as number) - (minValue as number);
        let startValue = (value as number) - (minValue as number);
        percentage = (startValue / range) * 100;
    }
    return (
        <RangeCheckerWrapper>
            {inputs.map((inputItem, index) => {
                return (
                    <Input key={index} features={inputItem} />
                )
            })}
            <ProgressBar percentage={percentage} />
        </RangeCheckerWrapper>
    )
}
export default RangeChecker