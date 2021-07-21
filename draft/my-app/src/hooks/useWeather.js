import { useEffect, useState } from 'react';

import { API_KEY } from '../settings';

export const useWeather = ({
    cityName
}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`).then(res => res.json()).then(setData)
    }, [])
    return data;
};