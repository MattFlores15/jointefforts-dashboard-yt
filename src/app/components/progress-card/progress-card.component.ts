import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'app-progress-card',
  standalone: true,
  imports: [CommonModule, DoughnutChartComponent],
  templateUrl: './progress-card.component.html',
  styleUrl: './progress-card.component.css'
})
export class ProgressCardComponent {

}
