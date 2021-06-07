import React from 'react'
import "./WeatherTable.css";

function WeatherTable({city, data}) {

    if (data != null){
        return (
            <table className="WeatherTable" data-testid="WeatherTable">
            <tr>
                <th>{city}</th>
                <th>Suhu</th>
                <th>Perbedaan</th>
            </tr>
            {
                data.map((weather, index) => {
                    return (
                        <tr key={index}>
                            <td>{weather["day"]}</td>
                            <td>{weather["tmp"]}C</td>
                            <td>{weather["difTmp"]}C</td>
                        </tr>
                    )
                })
            }
            </table>
        )
    }else{
        return null
    }
}

export default WeatherTable
