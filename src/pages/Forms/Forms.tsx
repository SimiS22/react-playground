import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RangeChecker from './RangeChecker/RangeChecker'

const Forms: React.FC = () => {
    return (
        <Switch>
            <Route path='/forms/range-checker'>
                <RangeChecker />
            </Route>
        </Switch>
    )
}
export default Forms