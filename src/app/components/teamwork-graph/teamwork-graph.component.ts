import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-teamwork-graph',
  standalone: true,
  imports: [],
  templateUrl: './teamwork-graph.component.html',
  styleUrl: './teamwork-graph.component.css'
})
export class TeamworkGraphComponent {
  @Input() data!: number[];

  public chart: any;

  ngOnInit() {
    const canvas = document.getElementById('teamworkChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart("teamworkChart", {
      type: 'bar',
      data: {
        labels: ['Weekly', 'Monthly', 'Biannual'],
        datasets: [
          {
            label: 'Your Surveys',
            data: this.data,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            // fill: false,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
