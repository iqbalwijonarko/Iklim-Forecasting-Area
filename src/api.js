import axios from "axios"

var OpenWeatherApi = "271da6b323b05ebaf2b4aaa0f3378f89"

export async function getWeatherApi(city) {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OpenWeatherApi}&units=metric`)
    return response.data
}