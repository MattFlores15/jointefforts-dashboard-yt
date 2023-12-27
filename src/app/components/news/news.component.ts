import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NgFor, SlickCarouselModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
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

  sliderConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

}
