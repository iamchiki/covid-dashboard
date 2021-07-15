import * as chart from './chart.min.js';

const pieChartElem = document.getElementById('pie-chart').getContext('2d');
export const pieChart = new Chart(pieChartElem, {
    type: 'pie',
    data: {
        labels: ['Confirmed', 'Deaths', 'Recovered', 'Active'],
        datasets: [{
            label: `No. of People`,
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ]
        }]
    },
    options: {}
});