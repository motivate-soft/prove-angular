import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public typeToggle = '1';

  ngOnInit() {
    this.chartColor = '#FFFFFF';

    const speedCanvas = document.getElementById('speedChart');

    const dataSuccess = {
      data: [3.000, 1.000, 0.500, 3.000, 1.000, 3.000, 2.000],
      borderColor: '#28A745',
      backgroundColor: 'transparent',
      pointBorderColor: '#28A745',
      borderWidth: 1,
      tension: 0.1
    };

    const dataFailed = {
      data: [4.001, 4.502, 5.056, 3.521, 4.231, 3.532, 9.214],
      borderColor: '#DC3545',
      backgroundColor: 'transparent',
      pointBorderColor: '#DC3545',
      borderWidth: 1,
      tension: 0.1
    };

    const dataTotal = {
      data: [7.210, 5.521, 5.555, 5.225, 5.53, 6.51, 9.921],
      borderColor: '#DCDCDC',
      backgroundColor: 'transparent',
      pointBorderColor: '#DCDCDC',
      borderWidth: 1,
      tension: 0.1
    };

    const speedData = {
      labels: ['19-04', '20-04', '21-04', '22-04', '23-04', '24-04', '25-04'],
      datasets: [dataSuccess, dataFailed, dataTotal]
    };

    const chartOptions = {
      legend: {
        display: false,
        position: 'top'
      },
      scales: {
        xAxes: [{
          ticks: { fontColor: 'black' },
          gridLines: { color: 'rgba(255,255,255,0.1)' },
        }],
        yAxes: [{
          ticks: { fontColor: 'black' },
          gridLines: { color: 'rgba(255,255,255,0.1)' },
          stacked: true
        }],
      }
    };

    const lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: true,
      data: speedData,
      options: chartOptions
    });
  }
}
