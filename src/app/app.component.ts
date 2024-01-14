import { Component, HostListener } from '@angular/core';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule, Islamic } from '@syncfusion/ej2-angular-calendars';
import { Router, NavigationEnd } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsCardComponent } from './components/news-card/news-card.component';




@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule, CommonModule, RouterOutlet, TopNavbarComponent, SidebarComponent, FontAwesomeModule, FormsModule, ReactiveFormsModule, SlickCarouselModule, NewsCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'jointefforts-dashboard';
  sidebarVisible = false;
  topNavbarVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe(() => {
        this.shouldShowSidebarAndTopNavbar();
      });
  }

  shouldShowSidebarAndTopNavbar(): void {
    const excludedRoutes = ['/onboarding1', '/onboarding2', '/login'];

    const currentRoute = this.router.url;

    this.sidebarVisible = !excludedRoutes.includes(currentRoute);
    this.topNavbarVisible = !excludedRoutes.includes(currentRoute);
  }

  shouldShowPaddingLeft(): boolean {
  const excludedRoutes = ['/onboarding1', '/onboarding2', '/login'];
  const currentRoute = this.router.url;
  return !excludedRoutes.includes(currentRoute);
}

shouldShowMarginTop(): boolean {
  const excludedRoutes = ['/onboarding1', '/onboarding2', '/login'];
  const currentRoute = this.router.url;
  return !excludedRoutes.includes(currentRoute);
}

@HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Handle window resize event, if needed
    // You can update properties or perform other actions here
  }
}
