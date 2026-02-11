// src/components/Weather.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!capital) return

        const apiKey = import.meta.env.VITE_OWM_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            capital
        )}&appid=${apiKey}&units=metric`

        axios
            .get(url)
            .then((res) => {
                setWeather(res.data)
                setError(null)
            })
            .catch((e) => {
                setError('Impossible de récupérer la météo')
                setWeather(null)
            })
    }, [capital])

    if (error) return <p>{error}</p>
    if (!weather) return <p>Chargement météo...</p>

    const icon = weather.weather?.[0]?.icon
    const description = weather.weather?.[0]?.description
    const iconUrl = icon
        ? `https://openweathermap.org/img/wn/${icon}@2x.png`
        : null

    return (
        <div>
            <h3>Météo à {capital}</h3>
            <div>température {weather.main.temp} °C</div>
            {iconUrl && (
                <div>
                    <img src={iconUrl} alt={description || 'weather icon'} />
                </div>
            )}
            <div>vent {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather
