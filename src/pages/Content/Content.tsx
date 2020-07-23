import React from 'react'
import { Route, Switch } from 'react-router-dom'
import KeyboardEvents from '../KeyboardEvents/KeyboardEvents'
import './Content.scss'

const Content: React.FC = () => {
    return (
        <div className='content'>
            <Switch>
                <Route path='/keyboard-events'><KeyboardEvents /></Route>
            </Switch>
        </div>
    )
}
export default Content