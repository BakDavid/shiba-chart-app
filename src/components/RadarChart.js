import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'First column',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Second column',
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Third column',
        data: [20, 7, 0, 4, 2, 6],
        backgroundColor: [
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Forth column',
        data: [1, 7, 10, 4, 15, 4],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  const RadarChart = () => (
    <>
      <div className='header'>
        <h1 className='title'>Radar Chart</h1>
      </div>
      <Radar data={data} options={options} height={100}/>
    </>
  );

export default RadarChart