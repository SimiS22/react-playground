import React from 'react'
import styled from 'styled-components'

interface PropsType {
    features: {
        inputType: string,
        placeholder: string,
        label: string,
        value: number | string,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }
}

const InputWrapper = styled.input`
    display: flex;
    justify-content:center;
    height: 40px;
    width: 30%;
    margin:20px;
    border-radius:20px;
    border: none;
    outline: none;
    box-shadow:0px 0px 12px 0px #e2e2e2;
    text-align:center;
`
const LableWrapper = styled.label`
    font-size:20px;
    font-weight: bold;
`

const Input: React.FC<PropsType> = (props) => {

    return (
        <>
            <LableWrapper>{props.features.label}</LableWrapper>
            <InputWrapper
                type={props.features.inputType}
                id={props.features.label}
                placeholder={props.features.placeholder}
                value={props.features.value}
                onChange={props.features.onChange}
            />
        </>
    )
}
export default Input