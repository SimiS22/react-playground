import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ThemeSelector from './ThemeSelector/ThemeSelector'
const ContextAPI: React.FC = () => {
    return (
        <Switch>
            <Route path='/contextAPI/theme-selector'>
                <ThemeSelector />
            </Route>
        </Switch>
    )
}
export default ContextAPI