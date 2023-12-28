import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-workload-graph',
  standalone: true,
  imports: [],
  templateUrl: './workload-graph.component.html',
  styleUrl: './workload-graph.component.css'
})
export class WorkloadGraphComponent {
 @Input() data!: number[];

  public chart: any;

  ngOnInit() {
    const canvas = document.getElementById('workloadChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const dataColors = [
      { borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)' },
      { borderColor: 'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235, 0.2)' },
      { borderColor: 'rgba(255, 205, 86, 1)', backgroundColor: 'rgba(255, 205, 86, 0.2)' },
      { borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)' },
      { borderColor: 'rgba(153, 102, 255, 1)', backgroundColor: 'rgba(153, 102, 255, 0.2)' },
      { borderColor: 'rgba(255, 159, 64, 1)', backgroundColor: 'rgba(255, 159, 64, 0.2)' },
    ];

    this.chart = new Chart("workloadChart", {
      type: 'line',
      data: {
        labels: ['Nursing', 'Psychology', 'General Practice', 'Administration', 'Emergency', 'Laboratory'],
        datasets: [
          {
            label: 'Workload Impact of Surveys',
            data: this.data,
            borderColor: dataColors.map(color => color.borderColor),
            borderWidth: 2,
            fill: false,
            backgroundColor: dataColors.map(color => color.backgroundColor),
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
