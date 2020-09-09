import React, { useState } from 'react'
import Greeting from '../../components/Greeting/Greeting'
import Login from '../../components/Button/Login';

import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 60px;
`

const ConditionalRendering: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleOnClickLogin = () => {
        setIsLoggedIn(true);
    }
    const handleOnClickLogout = () => {
        setIsLoggedIn(false);
    }
    const button = !isLoggedIn ? <Login onClick={handleOnClickLogin} /> :
        <Login onClick={handleOnClickLogout} />
    return (
        <DivWrapper>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </DivWrapper>
    )
}
export default ConditionalRendering