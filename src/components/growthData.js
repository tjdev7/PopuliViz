import React from 'react'
import { Line } from 'react-chartjs-2'

const dataConfig = {
    labels: [
        '1940-1950',
        '1950-1960',
        '1960-1970',
        '1970-1980',
        '1980-1990',
        '1990-2000',
        '2000-2010',
        '2010-2020',
    ],
    datasets: [
        {
            label: 'Population growth in percentage',
            backgroundColor: 'blue',
            borderColor: 'black',
            borderWidth: 0.3,
            data: [14.5, 18.5, 13.3, 11.5, 9.8, 13.2, 9.7, 7.4],
        },
    ],
}

export default class growthData extends React.Component {
    render() {
        return (
            <div className="chartgraph">
                <Line data={dataConfig} />
            </div>
        )
    }
}
