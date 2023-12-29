import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NgFor, SlickCarouselModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
     @ViewChild(SlickCarouselComponent) slickModal: SlickCarouselComponent | undefined;

  articles = [
    // Articles 4-7
    { image: "../../assets/images/pexels-juan-c-palacios-4069882.jpg" , title: "Nurturing Tomorrow's Healthcare Heroes: Survey Program's Focus on Training", summary: "Delve into the ways the survey program is contributing to the development of healthcare professionals..." },
    { image: "../../assets/images/pexels-antoni-shkraba-5214994.jpg", title: "Tech Solutions for Staffing Woes: Survey Program Spurs Digital Innovations", summary: "Discover how the survey program's insights are catalyzing technological advancements in healthcare staffing..." },
    { image: "../../assets/images/pexels-karolina-grabowska-8538867.jpg", title: "Community Engagement: A Surprising Solution to Healthcare Staff Shortages", summary: "Uncover the community-focused strategies emerging from the survey program..." },
    { image: "../../assets/images/pexels-rdne-stock-project-6129507.jpg", title: "Survey Program Success Stories: Real Impact on Healthcare Professionals", summary: "Hear firsthand accounts from healthcare workers whose lives have been positively influenced by the survey program..." },
    { image: "../../assets/images/pexels-juan-c-palacios-4069882.jpg" , title: "Nurturing Tomorrow's Healthcare Heroes: Survey Program's Focus on Training", summary: "Delve into the ways the survey program is contributing to the development of healthcare professionals..." },
    { image: "../../assets/images/pexels-antoni-shkraba-5214994.jpg", title: "Tech Solutions for Staffing Woes: Survey Program Spurs Digital Innovations", summary: "Discover how the survey program's insights are catalyzing technological advancements in healthcare staffing..." },
    { image: "../../assets/images/pexels-karolina-grabowska-8538867.jpg", title: "Community Engagement: A Surprising Solution to Healthcare Staff Shortages", summary: "Uncover the community-focused strategies emerging from the survey program..." },
    { image: "../../assets/images/pexels-rdne-stock-project-6129507.jpg", title: "Survey Program Success Stories: Real Impact on Healthcare Professionals", summary: "Hear firsthand accounts from healthcare workers whose lives have been positively influenced by the survey program..." },
  ];

 // Custom slider logic
  currentIndex = 0;
  sliderPosition = '0px';
  slideWidth = 288; // Adjust this based on the width of your card
  maxIndex = 0;

  slidePrev() {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
    this.updateSliderPosition();
  }

  slideNext() {
    this.currentIndex = Math.min(this.articles.length - 1, this.currentIndex + 1);
    this.updateSliderPosition();
  }

  calculateSliderWidth(): number {
    return this.articles.length * this.slideWidth;
  }

   updateSliderPosition() {
    this.maxIndex = Math.max(0, this.articles.length - 1);
    const containerWidth = this.maxIndex * this.slideWidth;
    
    if (this.currentIndex === this.maxIndex) {
      // If it's the last card, align the slider to the right
      this.sliderPosition = `-${containerWidth - this.slideWidth}px`;
    } else {
      // Otherwise, allow normal sliding
      this.sliderPosition = `-${this.currentIndex * this.slideWidth}px`;
    }
  }


}
