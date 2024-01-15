import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.css'
})
export class NewsArticleComponent {

  // Inject the Location service
  constructor(private location: Location) {}

  // Function to go back to the previous page
  goBack(): void {
    this.location.back();
  }

   // Add properties to manage reply visibility
  showReplyComment1: boolean = false;
  showReplyComment2: boolean = false;
  // Function to toggle the visibility of replies for Comment 1
  toggleReply(comment: string): void {
    if (comment === 'comment1') {
      this.showReplyComment1 = !this.showReplyComment1;
      // Close the reply for Comment 2 when opening Comment 1's reply
      this.showReplyComment2 = false;
    } else if (comment === 'comment2') {
      this.showReplyComment2 = !this.showReplyComment2;
      // Close the reply for Comment 1 when opening Comment 2's reply
      this.showReplyComment1 = false;
    }
  }

  // Function to check if the reply for Comment 1 should be shown
  showReply(comment: string): boolean {
    if (comment === 'comment1') {
      return this.showReplyComment1;
    } else if (comment === 'comment2') {
      return this.showReplyComment2;
    }
    return false;
  }
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
