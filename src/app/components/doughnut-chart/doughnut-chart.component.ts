import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
 public chart: any;

  createChart() {
    const labels = ['Wekelijks', 'Maandelijks', 'Halfjaarlijks'];
    const data = [80, 35, 50];
    const total = data.reduce((acc, value) => acc + value, 0);

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Tot nieuwe badge',
          data: data,
          backgroundColor: ['#14A38B', '#F2AC57', '#9A9AFF'],
        }],
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        aspectRatio: 2,
        scales: {
          x: {
            max: 100,
            min: 0,
          }
        },
        plugins: {
          legend: {
            position: 'top', 
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = labels[context.dataIndex];
                const value = data[context.dataIndex];
                const percent = Math.round((value / total) * 100);
                return `${label}: ${percent}%`;
              },
            },
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10, 
            top: 0,
            bottom: 0,
          },
        },
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
