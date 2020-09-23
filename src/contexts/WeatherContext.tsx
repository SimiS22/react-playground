import React, { createContext } from 'react'

const WeatherContext = createContext({
    cities: [],
    addCity: (city: string, temperature: number) => { }
});
export default WeatherContext