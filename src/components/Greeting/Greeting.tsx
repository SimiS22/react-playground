import React from 'react';

interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = props => {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please log in!</h1>;
};
export default Greeting;
