import React from 'react';
import {Pie} from 'react-chartjs-2';

const dataConfig = {
  labels: [    'McMullen, Alabama', 
                'Hobart Bay, Alaska', 
                'Magnet Cove, Arkansas', 
                'Weeki Wachee, Florida', 
                'Hartly, Delaware',
                'Tate City, Georgia'],
  datasets: [
    {
      label: 'Least Populated areas in the USA',
      backgroundColor: ['red','orange','yellow','green','blue', 'purple'],
      borderColor: 'black',
      borderWidth: 0.3,
      data: [9, 1, 5, 1, 5, 16, 0]
    }
  ]
}

export default class smallestCities extends React.Component {
  render() {
    return (
      <div className="charts">
        <Pie
          data={dataConfig}
        />
      </div>
    );
  }
}