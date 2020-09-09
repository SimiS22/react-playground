import React from 'react';
import styled from 'styled-components'

interface GreetingProps {
  isLoggedIn: boolean;
}

const HeadingWrapper = styled.h1`
  color: #0043ffc9; 
  font-family: cursive;
  font-size: 75px;
`

const Greeting: React.FC<GreetingProps> = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <HeadingWrapper>Welcome Back!</HeadingWrapper> : <HeadingWrapper>Please log in!</HeadingWrapper>;
};
export default Greeting;
