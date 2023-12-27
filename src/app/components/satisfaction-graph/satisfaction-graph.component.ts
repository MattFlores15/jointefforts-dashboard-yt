import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-satisfaction-graph',
  standalone: true,
  imports: [],
  templateUrl: './satisfaction-graph.component.html',
  styleUrl: './satisfaction-graph.component.css'
})
export class SatisfactionGraphComponent {
  @Input() data!: number[];

  public chart: any;

  ngOnInit() {
    const canvas = document.getElementById('satisfactionChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart("satisfactionChart", {
      type: 'bar',
      data: {
        labels: ['Survey 1', 'Survey 2', 'Survey 3', 'Survey 4', 'Survey 5', 'Survey 6'],
        datasets: [
          {
            label: 'Overall Surveys Completed',
            data: this.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            // fill: false,
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
