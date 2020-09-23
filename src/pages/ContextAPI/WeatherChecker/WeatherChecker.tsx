import React from 'react'

const WeatherChecker: React.FC = () => {
    const unit = 'imperial';
    const mode = 'json';
    const encodedName = encodeURIComponent('name')
    const fetchedWeather = fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&mode=${mode}&q=${encodedName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "ff9721b437msh5ce506ab0c5feebp17e139jsn029484223138"
        }
    })
        .then((response) => {
            console.log(response);
            if (response.status !== 200) {
                throw new Error();
            }
            return response.json
        })
    return (
        <div></div>
    )
}
export default WeatherChecker