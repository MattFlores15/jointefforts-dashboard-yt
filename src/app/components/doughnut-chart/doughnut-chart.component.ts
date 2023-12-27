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
    const labels = ['Weekly', 'Monthly', 'Biannual'];
    const data = [35, 45, 20];
    const total = data.reduce((acc, value) => acc + value, 0);
    const percentages = data.map(value => Math.round((value / total) * 100));

    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: labels.map((label, index) => `${label} ${percentages[index]}%`), // Combine labels and percentages
        datasets: [{
          label: 'My First Dataset',
          data: data,
          backgroundColor: ['#14A38B', '#F2AC57', '#9A9AFF'],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'left',
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
            left: 10, // Adjust the left padding to make space for the legend
            right: 0,
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
