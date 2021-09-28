import React from 'react';
import {Pie} from 'react-chartjs-2';

const dataConfig = {
  labels: ['Herriman City, Utah', 
          'Leander City, Texas', 
          'Little Elm City, Texas', 
          'Forney City, Texas', 
          'Bluffton Town, South Carolina',
          'Fort Mill Town, South Carolina',],
  datasets: [
    {
      label: 'Fastest growing cities in the USA',
      backgroundColor: ['red','orange','yellow','green','blue', 'purple'],
      borderColor: 'black',
      borderWidth: 0.3,
      data: [21768, 27288, 25892, 13819, 13054, 11529]
    }
  ]
}

export default class growingCities extends React.Component {
  render() {
    return (
      <div className="cityChart">
        <Pie
          data={dataConfig}
        />
      </div>
    );
  }
}