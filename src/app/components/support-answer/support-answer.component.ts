import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support-answer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './support-answer.component.html',
  styleUrl: './support-answer.component.css'
})
export class SupportAnswerComponent {
 // Variable to store user feedback (initially set to null)
  feedback: 'thumbsUp' | 'thumbsDown' | null = null;

  // Method to handle user feedback
  handleFeedback(selectedFeedback: 'thumbsUp' | 'thumbsDown'): void {
    if (this.feedback === selectedFeedback) {
      // If the same option is clicked again, unselect it
      this.feedback = null;
    } else {
      // Otherwise, update the selected feedback
      this.feedback = selectedFeedback;
    }
  }
}
