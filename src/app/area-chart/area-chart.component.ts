import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts = Highcharts;
  chartOptions={}
    
  constructor(){
  this.chartOptions={
    chart: {
      type: 'area'
  },
  title: {
      text: 'Yearly Placement Evaluation 2022-2023',
      align: 'center'
  },
  subtitle: {
      text: 'Luminar Technolab',
      align: 'center'
  },
  yAxis: {
      title: {
          useHTML: true,
          text: 'Number of Placements'
      }
  },

  xAxis:{
     categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },

credits:{
enabled:false,   // to remove the unwanted data that  copied from browser
},

  tooltip: {
      shared: true,
      headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
  },
  
  series: [{
      name: 'Mearn Stack',
      data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214 , 10399, 12881, 15403]
  }, {
      name: 'Phython',
      data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

  }, {
      name: 'Big Data',
      data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
  }, {
      name: 'Flutter',
      data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550 ,4585]

  }, {
      name: 'Software Testing',
      data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
  }]
   }
   HC_exporting(Highcharts);
  }
  }



