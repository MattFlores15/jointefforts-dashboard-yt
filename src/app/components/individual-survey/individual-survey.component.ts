// individual-survey.component.ts
import { Component } from '@angular/core';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-survey',
  standalone: true,
  imports: [SurveyFormComponent, CommonModule],
  templateUrl: './individual-survey.component.html',
  styleUrl: './individual-survey.component.css'
})
export class IndividualSurveyComponent {

  selectedSurveyType!: string;
  randomProgress: number = Math.floor(Math.random() * 100) + 1; // Generate a random progress percentage

  surveyTypes = [
    { name: 'Weekly', questions: [{ text: 'How was your week?', answer: '' }] },
    { name: 'Monthly', questions: [{ text: 'How was your month?', answer: '' }] },
    { name: 'Biannual', questions: [{ text: 'How was your last six months?', answer: '' }] }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.selectedSurveyType = params['type'];
    });
  }
}
