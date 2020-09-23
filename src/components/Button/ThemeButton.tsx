import React from 'react'
import ThemeContext from '../../contexts/Theme'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 40%;
    font-size: 24px;
    font-weight: bolder;
    color: ${(props) => props.theme === 'dark' ? 'white' : 'black'};
    background-color: ${(props) => props.theme === 'dark' ? 'black' : 'white'};
    border-radius: 30px;
    outline: none;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const ThemeButton: React.FC<any> = (props) => {
    return (
        <Wrapper>
            <ThemeContext.Consumer>
                {theme => <ButtonWrapper {...props}>Button with theme: {theme}</ButtonWrapper>}
            </ThemeContext.Consumer>
        </Wrapper>
    )
}
export default ThemeButton