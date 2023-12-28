import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

  // Replace this data with your actual data
  cardsData = [
    {
      bgColor: '#9A9AFF',
      icon: 'fas fa-rocket',
      title: 'Getting Started',
      questions: [
        'How do I access the Surveys page?',
        'What types of surveys are available?',
        'How can I track my progress on...',
        'Where can I find an overall progress...',
        'How do I filter surveys by category?',
        // ... add more questions
      ]
      
    },
    {
      bgColor: '#72D9FF',
      icon: 'fas fa-clipboard-list',
      title: 'Participating in Surveys',
      questions: [
        'How do I start a new survey?',
        'Can I save my progress and resume...',
        'What if I encounter technical issues...',
        'Is there a recommended frequency...',
        'Can I skip surveys if they do not apply...',
        // ... add more questions
      ]
      
    },
    {
      bgColor: '#D0D0FF',
      icon: 'fas fa-square-poll-vertical',
      title: 'Understanding Results',
      questions: [
        'Where can I view the results of my...',
        'What positive outcomes can I expect...',
        'How often are survey results updated?',
        'Can I share my survey results with...',
        'How do I interpret the visualizations...',
        // ... add more questions
      ]
      
    },
    {
      bgColor: '#F2AC57',
      icon: 'fas fa-newspaper',
      title: 'Staying Informed (News)',
      questions: [
        'What content does the News page...',
        'How often is the News page updated?',
        'Can I suggest topics for the News page?',
        'How do I navigate to the News page...',
        'Are there notifications for important...',
        // ... add more questions
      ]
      
    },
    {
      bgColor: '#14A38B',
      icon: 'fas fa-circle-question',
      title: 'Seeking Support',
      questions: [
        'How can I get assistance with technical...',
        'Is there a community forum for user...',
        'What resources are available for mental...',
        'Can I provide feedback on the dashb...',
        'Are there training materials available...',
        // ... add more questions
      ]
      
    },
    {
      bgColor: '#FF7171',
      icon: 'fas fa-table-columns',
      title: 'General Dashboard Navigation',
      questions: [
        'How do I access the Surveys page?',
        'What types of surveys are available?',
        'How can I track my progress on...',
        'Where can I find an overall progress...',
        'How do I filter surveys by category?',
        // ... add more questions
      ]
      
    },
    // Add more card data as needed
  ];

  i!: number;
  // Function to get background color for the icon based on card index
  getIconColor(index: number): string {
    // Replace this logic with the colors you want
    const colors = ['#ff6347', '#00bfff', '#8a2be2', '#32cd32', '#ffa500', '#9370db'];
    return colors[index % colors.length];
  }

  // Declare i variable to satisfy Angular type checking
  iconIndex!: number;
  // Function to get fontawesome icon class dynamically based on card index
  getFontAwesomeIcon(index: number): string {
    // Replace this logic with the appropriate fontawesome icon class or classes
    const iconClasses = "['fa-solid', 'fa-rocket', 'fa-cogs', 'fa-question-circle']";
    return iconClasses[index % iconClasses.length];
  }

}
