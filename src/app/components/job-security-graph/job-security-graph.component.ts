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
        labels: ['Nursing', 'Psychology', 'General Practice', 'Administration'],
        datasets: [
          {
            label: 'Job Security',
            data: this.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 205, 86, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 159, 64, 0.6)',
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
