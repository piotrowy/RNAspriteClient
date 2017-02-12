import React from 'react';

const parseDistancesLabels = (labels) => labels.map((label) => '' + label['number'] + '-' + label['originalName']);

const parseDistancesData = (data) => data.reduce((a, e, y) => a.concat(e.map((b, x) => [x, data.length-y-1, parseFloat(b.replace(/,/, '.'))])), []);

(function (H) {
  var Series = H.Series,
    each = H.each;

  /**
   * Create a hidden canvas to draw the graph on. The contents is later copied over
   * to an SVG image element.
   */
  Series.prototype.getContext = function () {
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.setAttribute('width', this.chart.chartWidth);
      this.canvas.setAttribute('height', this.chart.chartHeight);
      this.image = this.chart.renderer.image('', 0, 0, this.chart.chartWidth, this.chart.chartHeight).add(this.group);
      this.ctx = this.canvas.getContext('2d');
    }
    return this.ctx;
  };

  /**
   * Draw the canvas image inside an SVG image
   */
  Series.prototype.canvasToSVG = function () {
    this.image.attr({ href: this.canvas.toDataURL('image/png') });
  };

  /**
   * Wrap the drawPoints method to draw the points in canvas instead of the slower SVG,
   * that requires one shape each point.
   */
  H.wrap(H.seriesTypes.heatmap.prototype, 'drawPoints', function () {

    var ctx = this.getContext();

    if (ctx) {

      // draw the columns
      each(this.points, function (point) {
        var plotY = point.plotY,
          shapeArgs,
          pointAttr;

        if (plotY !== undefined && !isNaN(plotY) && point.y !== null) {
          shapeArgs = point.shapeArgs;

          pointAttr = (point.pointAttr && point.pointAttr['']) || point.series.pointAttribs(point);

          ctx.fillStyle = pointAttr.fill;
          ctx.fillRect(shapeArgs.x, shapeArgs.y, shapeArgs.width, shapeArgs.height);
        }
      });

      this.canvasToSVG();

    } else {
      this.chart.showLoading('Your browser doesn\'t support HTML5 canvas, <br>please use a modern browser');

      // Uncomment this to provide low-level (slow) support in oldIE. It will cause script errors on
      // charts with more than a few thousand points.
      // arguments[0].call(this);
    }
  });
  H.seriesTypes.heatmap.prototype.directTouch = false; // Use k-d-tree
}(Highcharts));

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
      categories: parseDistancesLabels(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['xlabels'])
    },

    yAxis: {
      categories: parseDistancesLabels(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['ylabels']),
      title: null
    },

    colorAxis: {
      min: 0,
      max: 100,
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
        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> residue No 1 <br><b>' + this.series.yAxis.categories[this.point.y] + '</b> residue No 2 <br><b>' + this.point.value + '</b> distance';
      }
    },

    turboThreshold: 0,

    series: [{
      name: 'Sales per employee',
      borderWidth: 1,
      data: parseDistancesData(matrix['mtxModels'][0]['mtxChains'][0]['matrices'][0]['data']),
      dataLabels: {
        enabled: false,
        color: '#000000'
      }
    }]

  });
};


export default {
  create: createChart
};