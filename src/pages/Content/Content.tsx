import React from 'react'
import { Route, Switch } from 'react-router-dom'
import KeyboardEvents from '../KeyboardEvents/KeyboardEvents'
import Animation from '../Animation/Animation'
import Login from '../Login/Login'
import './Content.scss'

const Content: React.FC = () => {
    return (
        <div className='content'>
            <Switch>
                <Route path='/keyboard-events'><KeyboardEvents /></Route>
                <Route path='/animation'><Animation /></Route>
                <Route path='/login'><Login /></Route>
            </Switch>
        </div>
    )
}
export default Content