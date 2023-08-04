import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
    Highcharts = Highcharts;
    chartOptions={}

    constructor(){
      this.chartOptions={
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Student Admission 2022-2023',
          align: 'center'
      },
      
credits:{
  enabled:false,   // to remove the unwanted data that  copied from browser
  },
  
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Courses',
          colorByPoint: true,
          data: [{
              name: 'Mearn Stack',
              y: 30.67,
              sliced: true,
              selected: true
          }, {
              name: 'Python',
              y: 24.77
          },  {
              name: 'Bigdata',
              y: 14.86
          }, {
              name: 'flutter',
              y: 12.63
          }, {
              name: 'Software Testing',
              y: 10.53
          },]            
      }]
  
      }
    }
}

