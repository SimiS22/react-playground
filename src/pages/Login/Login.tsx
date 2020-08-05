import React, { useEffect } from 'react';

const Login: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:4000');
      const data = await res.json();

      // tslint:disable-next-line: no-console
      console.log(`>>`, { data });
    };

    getData();
  }, []);

  return <div>Login</div>;
};
export default Login;
