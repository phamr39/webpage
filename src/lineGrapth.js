import React, { Component } from 'react'
// import { Chart } from "chart.js";
import { Chart } from 'react-chartjs-2'

const line = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            data: []
        }
    ]
};

export default class LineGraph extends Component {
    constructor() {
        super();
        this.chartRef = React.createRef();
        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 0, 80, 81, 56, 85, 40],
                    fill: false
                }]
            }
        };
        var ctx = document.getElementById("myChartRef").getContext("2d");
        var myChart = new Chart(ctx, config)
        setTimeout(function () {
            config.data.labels.push('Test');
            config.data.datasets[0].data.push(Math.random() * 100);
            myChart.update();
        }, 5000)
    };
    addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

}