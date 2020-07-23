import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import DrumKit from './DrumKit/DrumKit'
import { NAV_ROUTES } from '../../routes'

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