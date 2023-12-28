import { Component, Input } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [QuestionComponent, CommonModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent {
  @Input() surveyType: any;

  submitSurvey() {
    // Handle survey submission logic, e.g., send data to backend
    console.log(`Submitted ${this.surveyType.name} survey data:`, this.surveyType.questions);
  }
}
