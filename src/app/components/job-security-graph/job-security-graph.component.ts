import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-job-security-graph',
  standalone: true,
  imports: [],
  templateUrl: './job-security-graph.component.html',
  styleUrl: './job-security-graph.component.css'
})
export class JobSecurityGraphComponent {
  @Input() data!: number[];

  public chart: any; 

  ngOnInit() {
    const canvas = document.getElementById('jobSecurityChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart("jobSecurityChart", {
      type: 'polarArea',
      data: {
        labels: ['Survey 1', 'Survey 2', 'Survey 3', 'Survey 4', 'Survey 5', 'Survey 6'],
        datasets: [
          {
            label: 'Job Security',
            data: this.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.4)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
         elements: {
          line: {
            tension: 0,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
