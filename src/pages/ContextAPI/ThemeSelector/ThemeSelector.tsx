import React, { useState } from 'react'
import ThemeButton from '../../../components/Button/ThemeButton'
import ThemeContext from '../../../Theme'

const ThemeSelector: React.FC = () => {
    const [theme, setTheme] = useState('dark')

    const handleSelect = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <React.Fragment>
            <ThemeContext.Provider value={theme}>
                <ThemeButton theme={theme} onClick={handleSelect} />
            </ThemeContext.Provider>
        </React.Fragment>
    )
}
export default ThemeSelector