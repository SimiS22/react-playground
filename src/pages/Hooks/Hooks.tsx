import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from './Counter/Counter';
import LikeCounter from './Counter/LikeCounter';
import Calender from './Calender/Calender';

const Hooks: React.FC = () => {
  return (
    <Switch>
      <Route path="/hooks/counter">
        <Counter />
      </Route>
      <Route path="/hooks/like-counter">
        <LikeCounter />
      </Route>
      <Route path="/hooks/calender">
        <Calender />
      </Route>
    </Switch>
  );
};
export default Hooks;
