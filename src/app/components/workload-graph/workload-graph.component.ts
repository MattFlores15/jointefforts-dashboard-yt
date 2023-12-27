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

    this.chart = new Chart("workloadChart", {
      type: 'line',
      data: {
        labels: ['Survey 1', 'Survey 2', 'Survey 3', 'Survey 4', 'Survey 5', 'Survey 6'],
        datasets: [
          {
            label: 'Workload',
            data: this.data,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
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
