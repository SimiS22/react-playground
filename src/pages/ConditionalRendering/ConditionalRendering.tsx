import React, { useState } from 'react'
import Greeting from '../../components/Greeting/Greeting'
import LoginButton from '../../components/Button/LoginButtton';
import LogoutButton from '../../components/Button/LogOutButton'

const ConditionalRendering: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleOnClickLogin = () => {
        setIsLoggedIn(true);
    }
    const handleOnClickLogout = () => {
        setIsLoggedIn(false);
    }
    const button = isLoggedIn ? <LoginButton onClick={handleOnClickLogin} /> :
        <LogoutButton onClick={handleOnClickLogout} />
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}
export default ConditionalRendering