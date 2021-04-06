import React from 'react';
import { Line } from 'react-chartjs-2';

var event = new Event('UpdateData')

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May', 'a', 'b', 'c', 'd'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 55, 80, 81, 56, 60]
    },
    {
      label: 'HAHAHA',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,255,0,1)',
      borderWidth: 2,
      data: [55, 44, 58, 84, 63, 33, 44, 55, 44, 44, 33, 22, 66]
    }
  ]
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // event.addEventListener('UpdateData', function (data) {
    //   this.updateWhenReceiveData(data);
    // }, false);
    this.state = {
      data: {
        labels: ['January', 'February', 'March',
          'April', 'May', 'a', 'b', 'c', 'd','', '',''],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 55, 80, 81, 56, 60]
          },
          {
            label: 'HAHAHA',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 2,
            data: [55, 44, 58, 84, 63, 33, 44, 55]
          }
        ]
      },
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          ...this.state.data,
          datasets: [
            { ...this.state.data.datasets[0] },
            {
              label: 'HAHAHA',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,255,0,1)',
              borderWidth: 2,
              data: [55, 44, 58, 84, 63, 33, 44, 55, 44, 44, 33, 22, 66]
            }
          ]
        }
      });
    }, 3000)

  }

  updateData = () => {

    this.setState({
      data: {
        ...this.state.data,
        datasets: [
          { ...this.state.data.datasets[0] },
          {
            label: 'HAHAHA',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 2,
            data: [20, 15, 10, 5, 6, 20, 20, 57]
          }
        ]
      }
    });
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            scales: {
              yScales: [
                {
                  type: 'realtime',
                  realtime: {
                    onRefresh: function () {
                      state.datasets[0].data.push({
                        x: Date.now(),
                        y: Math.random() * 100
                      });
                    },
                    delay: 2000
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
