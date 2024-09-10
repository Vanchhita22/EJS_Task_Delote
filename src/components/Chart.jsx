import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../Asserts/style/chart.css";

// Registering the components needed for the bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BASE = 'http://localhost:3001'

const Chart = () => {

  const [data, setData] = useState({
    labels:[],
    datasets: [{}]
  })

  useEffect(() => {
    fetch( BASE + '/chart').then(res=> res.json()).then(setData)
  },[])

  // const data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       label: 'Sales Data',
  //       data: [12, 19, 3, 5, 2, 3, 7],
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h1>Chart</h1>
      <p>This is the Chart section.</p>
      <div style={{ width: '80%', margin: '0 auto' }}>
        { data.labels.length ?
          <Bar data={data} options={options} />
          : <></>
        }
      </div>
    </div>
  );
};

export default Chart;
