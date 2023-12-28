// surveys.component.ts

import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ChangeDetectorRef } from '@angular/core';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { WelcomeCardComponent } from '../welcome-card/welcome-card.component';


interface Survey {
  title: string;
  description: string;
  type: string;
  status: string;
  completionPercentage: number;
}

@Component({
  selector: 'app-surveys',
  standalone: true,
  imports: [CommonModule, DoughnutChartComponent, WelcomeCardComponent],
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})

export class SurveysComponent {


  getProgressBarWidth(percentage: number): string {
    if (percentage === 0) {
      return '100%';
    }
    else  {
      return percentage + '%'
    }
  }


  
  getProgressBarColor(percentage: number): string {
  if (percentage === 0) {
    return 'bg-gray-300'; // Light gray for 0% completion
  } else if (percentage >= 80) {
    return 'bg-green-500';
  } else if (percentage >= 20) {
    return 'bg-teal-600';
  } else {
    return 'bg-red-500';
  }
}


  getProgressTextColor(percentage: number): string {
    if (percentage >= 80) {
      return 'text-green-500';
    } else if (percentage >= 20) {
      return 'text-teal-600';
    } else {
      return 'text-red-500';
    }
  }
  
   surveys: Survey[] = [];
  originalSurveys: Survey[] = []; // Original survey data for "Overview" tab
  filteredSurveys: Survey[] = [];
    isCompletedFilter: boolean = false;
  currentSurveyType: string = '';
  // Add a property to track the active tab
activeTab: string = 'Overview';


  constructor(private cdRef: ChangeDetectorRef) {
    this.generateSampleData();
    // Initially, show all surveys
    this.currentSurveyType = 'Overview';
    this.filteredSurveys = this.surveys;
    this.originalSurveys = [...this.surveys];
  }

  ngAfterViewInit(): void {

  }


   generateSampleData() {
    // Display 6 completed cards of different categories
    for (let i = 0; i < 6; i++) {
      this.surveys.push({
        title: `Completed Survey ${i + 1}`,
        description: `Description ${i + 1}`,
        type: i % 3 === 0 ? 'Weekly' : (i % 3 === 1 ? 'Monthly' : 'Biannual'),
        status: 'Completed',
        completionPercentage: 100
      });
    }

    // Display 3 To Do Weekly, 5 To Do Monthly, and 2 To Do Biannual with varied completion percentages
    for (let i = 0; i < 3; i++) {
      // Introduce cards with 0%, 35%, 80%, or 55% completion
      const completionPercentages = [0, 35, 80, 55];
      const randomIndex = Math.floor(Math.random() * completionPercentages.length);
      const randomPercentage = completionPercentages[randomIndex];

      this.surveys.push({
        title: `To Do Weekly ${i + 1}`,
        description: `Description ${i + 1}`,
        type: 'Weekly',
        status: 'To do',
        completionPercentage: randomPercentage // Random completion percentage
      });
    }

    for (let i = 0; i < 5; i++) {
      // Introduce cards with 0%, 35%, 80%, or 55% completion
      const completionPercentages = [0, 35, 80, 55];
      const randomIndex = Math.floor(Math.random() * completionPercentages.length);
      const randomPercentage = completionPercentages[randomIndex];

      this.surveys.push({
        title: `To Do Monthly ${i + 1}`,
        description: `Description ${i + 1}`,
        type: 'Monthly',
        status: 'To do',
        completionPercentage: randomPercentage
      });
    }

    for (let i = 0; i < 2; i++) {
      // Introduce cards with 0%, 35%, 80%, or 55% completion
      const completionPercentages = [0, 35, 80, 55];
      const randomIndex = Math.floor(Math.random() * completionPercentages.length);
      const randomPercentage = completionPercentages[randomIndex];

      this.surveys.push({
        title: `To Do Biannual ${i + 1}`,
        description: `Description ${i + 1}`,
        type: 'Biannual',
        status: 'To do',
        completionPercentage: randomPercentage // Random completion percentage
      });
    }
  }

  
 
  filterSurveys(surveyType: string) {
    this.currentSurveyType = surveyType;
    this.activeTab = surveyType; // Set the active tab

    if (surveyType === 'Overview') {
      this.filteredSurveys = this.originalSurveys;
    } else {
      // Filter by survey type
      this.filteredSurveys = this.originalSurveys.filter(survey => survey.type === surveyType);

      // If the completed filter is active, apply it
      if (this.isCompletedFilter) {
        this.filteredSurveys = this.filteredSurveys.filter(survey => survey.status === 'Completed');
      }
    }
  }

  filterByStatus(event: any) {
    const status = event.target.value;

    // Use the filtered surveys based on the selected tab
    const surveysToFilter = this.currentSurveyType === 'Overview'
      ? this.originalSurveys.slice()
      : this.originalSurveys.filter(survey => survey.type === this.currentSurveyType);

    // Apply filters based on the selected status
    if (status === 'Completed') {
      this.isCompletedFilter = !this.isCompletedFilter; // Toggle completed filter
      this.filteredSurveys = surveysToFilter.filter(survey => survey.status === 'Completed');
    } else {
      this.isCompletedFilter = !this.isCompletedFilter; // Toggle completed filter
      this.filteredSurveys = surveysToFilter.filter(survey => survey.status === 'To do');
    }
  }

  
}
