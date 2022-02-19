import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'

import { FaCloudSunRain } from 'react-icons/fa'





const App = () => {
    const [weatherResult, setWeatherResult] = React.useState(null)

    const onSearchSubmit = async (searchInputValue) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=050ffae499d1cc667cbbc028ca82fee1`)
            // handle error
            if (response.status !== 200) {
                return
            }
            setWeatherResult(response?.data)
        }
        catch (error) {
            console.log(error)
            setWeatherResult(null)
        }
    }


    return (
        <div className="container my-5">
            <h1 className="text-center title">
                <FaCloudSunRain style={{
                    color: '#fff107',
                    fontSize: '4rem',
                    margin: '1vh'
                }} />
                Weather App</h1>
            <CitySearch onSearchSubmit={onSearchSubmit} />
            {weatherResult ? <WeatherCard weatherResult={weatherResult} />
                :
                <div className="alert alert-danger text-center" style={{ margin: '2vh', borderRadius: '10px' }} role="alert">
                    Please enter a valid city name
                </div>

            }

        </div>
    )
}

export default App