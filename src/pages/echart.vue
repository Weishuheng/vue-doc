<template>
  <div id="echartContain" ref="echart" style="width: 100%; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts'
import data13 from '../utils/data1.3.js'
export default {
  mounted() {

    const chartDom = document.getElementById('echartContain');
    const myChart = echarts.init(chartDom);
    var option;

    const updateFrequency = 2000;
    // const dimension = 0;
    // const countryColors = {
    //   Australia: '#00008b',
    //   Canada: '#f00',
    //   China: '#ffde00',
    //   Cuba: '#002a8f',
    //   Finland: '#003580',
    //   France: '#ed2939',
    //   Germany: '#000',
    //   Iceland: '#003897',
    //   India: '#f93',
    //   Japan: '#bc002d',
    //   'North Korea': '#024fa2',
    //   'South Korea': '#000',
    //   'New Zealand': '#00247d',
    //   Norway: '#ef2b2d',
    //   Poland: '#dc143c',
    //   Russia: '#d52b1e',
    //   Turkey: '#e30a17',
    //   'United Kingdom': '#00247d',
    //   'United States': '#b22234'
    // };
    

    // const flags = data11;
    const data = data13;
    const years = [];
    for (let i = 0; i < data.length; ++i) {
      if (years.length === 0 || years[years.length - 1] !== data[i][2]) {
        years.push(data[i][2]);
      }
    }
    let startIndex = 1;
    let startYear = years[startIndex];
    function SortFilter(year){
      let dataSource = data.slice(1).filter(function (d) {
        return d[2] === year;
      })
      dataSource.sort((a, b) => b[0] - a[0]);
      if(dataSource.length <= 10){
        return dataSource;
      }else{
        let newData = dataSource.slice(0, 10)
        return newData
      }
    }
    let dataSource =  SortFilter(startYear)
    option = {
      grid: {
        top: 10,
        bottom: 30,
        left: 150,
        right: 80
      },
      xAxis: {
        max: 'dataMax',
        axisLabel: {
          formatter: function (n) {
            return Math.round(n) + '';
          }
        }
      },
      yAxis: {
        type: 'category',
        inverse: true,
        max: 10,
        axisLabel: {
          show: true,
          fontSize: 14,
          // formatter: function (value) {
          //   return value + '{flag|' + getFlag(value) + '}';
          // },
          rich: {
            flag: {
              fontSize: 25,
              padding: 5
            }
          }
        },
        animationDuration: 300,
        animationDurationUpdate: 300
      },
      series: [
        {
          data : dataSource,
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          itemStyle: {
            color: function () {
              return '#5470c6';
            }
          },
          encode: {
            x: 0,
            y: 3
          },
          label: {
            show: true,
            precision: 1,
            position: 'right',
            valueAnimation: true,
            fontFamily: 'monospace'
          }
        }
      ],
      // Disable init animation.
      animationDuration: 0,
      animationDurationUpdate: updateFrequency,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      graphic: {
        elements: [
          {
            type: 'text',
            right: 160,
            bottom: 60,
            style: {
              text: startYear,
              font: 'bolder 80px monospace',
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }
        ]
      }
    };
    myChart.setOption(option);
      (function () {
        setTimeout(function () {
          updateYear(2024);
        }, 5000);
      })()
    function updateYear(year) {
      let dataSource =  SortFilter(year)
      option.series[0].data = dataSource;
      option.graphic.elements[0].style.text = year;
      myChart.setOption(option);
    }

    option && myChart.setOption(option);
  }
  

};
</script>

<style scoped>

</style>
