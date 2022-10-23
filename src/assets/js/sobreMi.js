import Chart from 'chart.js/auto';

import terry from '../images/ica.jpg';

const tecnologies = [
    'html',
    'react',
    'javascript',
    'css',
    'bootstrap',
    'webpack'
].map(t => t.toUpperCase());

const createChart = (
    html,
    react,
    javascript,
    css,
    bootstrap,
    webpack
  ) => {
    const dataChart = {
      labels: tecnologies,
      datasets: [
        {
          label: 'Habilidades',
          backgroundColor: [
            'rgb(228,77,38)',
            'rgb(97,218,251)',
            'rgb(255,202,40)',
            'rgb(66,165,245)',
            'rgb(117,50,249)',
            'rgb(182,210,223)',
          ],
          data: [
            html,
            react,
            javascript,
            css,
            bootstrap,
            webpack
          ],
        },
      ],
    };
    const configChart = {
        type: 'polarArea',
        data: dataChart,
        options: {
        color: '#fff',
        maintainAspectRatio: false, //Para ajustarlo dentro del modal
        },
    };
    const myChart = new Chart(document.getElementById('myChart'), configChart);
};
createChart(90,20,70,60,60,80);
document.getElementById('terry').src = terry;