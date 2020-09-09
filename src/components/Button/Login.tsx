import React from 'react'
import styled from 'styled-components'

export const LoginWrapper = styled.div`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    height: 60px;
    box-shadow: 0 0 20px 0 #e2e2e2;
    font-size: 22px;
    font-weight: bolder;
    margin: 40px;
    border-radius: 16px;
`

const Login = (props: any) => {
    return (
        (props.onClick.name === 'handleOnClickLogin') ?
            <LoginWrapper onClick={props.onClick}>Login</LoginWrapper> :
            <LoginWrapper onClick={props.onClick}>Logout</LoginWrapper>
    )
}
export default Login