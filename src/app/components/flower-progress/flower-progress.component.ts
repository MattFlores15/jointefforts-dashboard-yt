import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-flower-progress',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flower-progress.component.html',
  styleUrl: './flower-progress.component.css'
})
export class FlowerProgressComponent implements OnInit{
  flowerCount: number = 5;
  progressValue: number = 3;

  // Calculate progress bar width based on progress value
  get progressWidth(): string {
    return (this.progressValue / 10) * 100 + '%';
  }

  constructor() { }

  ngOnInit(): void {
    // Sample logic to simulate earning flower badges
    // setInterval(() => {
    //   if (this.progressValue < 10) {
    //     this.progressValue++;
    //   } else {
    //     this.progressValue = 0;
    //     this.flowerCount++;
    //   }
    // }, 1000);
  }
}
