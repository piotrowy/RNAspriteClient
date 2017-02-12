import React from 'react';

const parseDistancesLabels = (labels) => labels.map((label) => '' + label['number'] + '-' + label['originalName']);

const parseDistancesData = (data) => data.reduce((a, e, y) => a.concat(e.slice(0,100).map((b, x) => [x, data.length-y-1, +b])), []);

const createChart = (container, title, matrix) => {
  console.log(parseDistancesData(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['data']));
  Highcharts.chart(container, {

    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1
    },


    title: {
      text: title
    },

    xAxis: {
      categories: parseDistancesLabels(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['xlabels']).slice(0,100)
    },

    yAxis: {
      categories: parseDistancesLabels(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['ylabels']).slice(0,100),
      title: null
    },

    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
          this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
      }
    },

    turboThreshold: 0,

    series: [{
      name: 'Sales per employee',
      borderWidth: 1,
      data: parseDistancesData(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['data']).slice(0,100),
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]

  });
};


export default {
  create: createChart
};