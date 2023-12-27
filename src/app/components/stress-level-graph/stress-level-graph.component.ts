import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stress-level-graph',
  standalone: true,
  imports: [],
  templateUrl: './stress-level-graph.component.html',
  styleUrl: './stress-level-graph.component.css'
})
export class StressLevelGraphComponent {
  @Input() data!: number[];

  public chart: any;

   ngOnInit() {
    const canvas = document.getElementById('stressLevelChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart("stressLevelChart", {
      type: 'radar',
      data: {
        labels: ['Survey 1', 'Survey 2', 'Survey 3', 'Survey 4', 'Survey 5', 'Survey 6'],
        datasets: [
          {
            label: 'Stress Level',
            data: this.data,
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false,
            backgroundColor: 'rgba(255, 206, 86, 0.2)', 
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
