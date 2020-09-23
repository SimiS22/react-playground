import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ThemeSelector from './ThemeSelector/ThemeSelector'
import WeatherChecker from './WeatherChecker/WeatherChecker'

const ContextAPI: React.FC = () => {
    return (
        <Switch>
            <Route path='/contextAPI/theme-selector'>
                <ThemeSelector />
            </Route>
            <Route path='/contextAPI/weather-checker'>
                <WeatherChecker />
            </Route>
        </Switch>
    )
}
export default ContextAPI