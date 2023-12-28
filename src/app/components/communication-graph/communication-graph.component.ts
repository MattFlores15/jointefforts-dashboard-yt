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

    const dataColors = [
      { borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.6)' },
      { borderColor: 'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235, 0.6)' },
      { borderColor: 'rgba(255, 205, 86, 1)', backgroundColor: 'rgba(255, 205, 86, 0.6)' },
      { borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { borderColor: 'rgba(153, 102, 255, 1)', backgroundColor: 'rgba(153, 102, 255, 0.6)' },
      { borderColor: 'rgba(255, 159, 64, 1)', backgroundColor: 'rgba(255, 159, 64, 0.6)' },
    ];

    this.chart = new Chart("communicationChart", {
      type: 'bubble',
      data: {
        labels: ['Nursing', 'Psychology', 'General Practice', 'Administration', 'Emergency', 'Laboratory'],
        datasets: [
          {
            label: 'Communication Effectiveness',
            data: this.data.map((value, index) => ({
              x: index, // Use the index as the x-coordinate
              y: value, // Use the value as the y-coordinate
              r: value / 5, // Use the value as the radius of the bubble
            })),
            borderColor: dataColors.map(color => color.borderColor),
            backgroundColor: dataColors.map(color => color.backgroundColor),
            borderWidth: 2,
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
