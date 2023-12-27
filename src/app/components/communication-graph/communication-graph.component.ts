import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-communication-graph',
  standalone: true,
  imports: [],
  templateUrl: './communication-graph.component.html',
  styleUrl: './communication-graph.component.css'
})
export class CommunicationGraphComponent {
  @Input() data!: number[];

  public chart: any;

  ngOnInit() {
    const canvas = document.getElementById('communicationChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart("communicationChart", {
      type: 'bubble',
      data: {
        labels: ['Survey 1', 'Survey 2', 'Survey 3', 'Survey 4', 'Survey 5', 'Survey 6'],
        datasets: [
          {
            label: 'Communication',
            data: this.data.map((value, index) => ({
              x: index, // Use the index as the x-coordinate
              y: value, // Use the value as the y-coordinate
              r: value/5, // Use the value as the radius of the bubble
            })),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderWidth: 2,
            // fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
