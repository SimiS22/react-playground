import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Clock from './Clock/Clock'


const KeyboardEvents: React.FC = () => {

    return (
        <Switch>
            <Route path='/animation/clock'>
                <Clock />
            </Route>
        </Switch>
    )


}
export default KeyboardEvents