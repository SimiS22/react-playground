import React from 'react';
import { Route, Switch } from 'react-router-dom';
import KeyboardEvents from '../KeyboardEvents/KeyboardEvents';
import Animation from '../Animation/Animation';
import Login from '../Login/Login';
import './Content.scss';
import LifeCycle from '../LifeCycle/LifeCycle';
import Hooks from '../Hooks/Hooks';
import ConditionalRendering from '../ConditionalRendering/ConditionalRendering';
import UpdateImage from '../UpdateCSSVariables/UpdateImage';

const Content: React.FC = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/keyboard-events">
          <KeyboardEvents />
        </Route>
        <Route path="/animation">
          <Animation />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/lifecycle">
          <LifeCycle age={30} />
        </Route>
        <Route path="/hooks">
          <Hooks />
        </Route>
        <Route path="/conditional-rendering">
          <ConditionalRendering />
        </Route>
        <Route path="/update-image">
          <UpdateImage />
        </Route>
      </Switch>
    </div>
  );
};
export default Content;
