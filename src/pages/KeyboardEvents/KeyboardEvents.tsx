import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DrumKit from './DrumKit/DrumKit'

const KeyboardEvents: React.FC = () => {

    return (
        <Switch>
            <Route path='/keyboard-events/drum-kit'>
                <DrumKit />
            </Route>
        </Switch>
    )


}
export default KeyboardEvents