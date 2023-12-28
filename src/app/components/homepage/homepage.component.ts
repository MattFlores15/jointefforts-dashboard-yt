import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from '../calendar/calendar.component';
import { WelcomeCardComponent } from '../welcome-card/welcome-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CalendarModule, CalendarComponent, WelcomeCardComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent  {

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // ngOnInit(): void {
  //   // Get the native elements using ElementRef
  //   const formattedDateElement = this.el.nativeElement.querySelector('#formattedDate');
  //   const calendarBody = this.el.nativeElement.querySelector('#calendarBody');

  //   // Set the date to December 2023
  //   const currentMonth = 11; // December (zero-based)
  //   const currentYear = 2023;

  //   // Set the formatted date in the header
  //   formattedDateElement.textContent = new Intl.DateTimeFormat('en-US', {
  //     year: 'numeric',
  //     month: 'long',
  //   }).format(new Date(currentYear, currentMonth, 1));

  //   // Get the current date
  //   const currentDate = new Date(currentYear, currentMonth, 23); // Example date, change it to the actual current date

  //   // Calculate the starting day of the current week
  //   const startingDay = currentDate.getDay();
  //   const startDate = currentDate.getDate() - startingDay + 1;

  //    // Ensure the calendar body is empty before adding the row
  //   calendarBody.innerHTML = '';

  //   // Generate only the first row of the calendar
  //   const row = this.renderer.createElement('tr');
  //   this.renderer.addClass(row, 'text-center');
  //   this.renderer.addClass(row, 'align-middle');
  //   for (let j = 0; j < 7; j++) {
  //     const cell = this.renderer.createElement('td');
  //     this.renderer.addClass(cell, 'px-2');
  //     this.renderer.addClass(cell, 'py-1');
  //     this.renderer.addClass(cell, 'justify-center');
  //     this.renderer.addClass(cell, 'cursor-pointer');
  //     const dayCell = this.renderer.createElement('div');
  //     this.renderer.addClass(dayCell, 'px-2');
  //     this.renderer.addClass(dayCell, 'py-1');
  //     this.renderer.addClass(dayCell, 'flex');
  //     this.renderer.addClass(dayCell, 'justify-center');
  //     this.renderer.addClass(dayCell, 'cursor-pointer');
  //     this.renderer.addClass(dayCell, 'hover:bg-gray-200');
  //     this.renderer.addClass(dayCell, 'rounded-full');
  //     this.renderer.addClass(dayCell, 'w-8');
  //     this.renderer.addClass(dayCell, 'h-8');
  //     this.renderer.addClass(dayCell, 'items-center');

  //     const currentDay = startDate + j;

  //     // Highlight the current day with a colored circle
  //     if (currentDay === currentDate.getDate()) {
  //       this.renderer.addClass(dayCell, 'current-day');
  //       this.renderer.addClass(dayCell, 'bg-blue-500');
  //       this.renderer.addClass(dayCell, 'text-white');
  //       this.renderer.addClass(dayCell, 'rounded-full');
  //       this.renderer.addClass(dayCell, 'w-8');
  //       this.renderer.addClass(dayCell, 'h-8');
  //       this.renderer.addClass(dayCell, 'flex');
  //       this.renderer.addClass(dayCell, 'justify-center');
  //       this.renderer.addClass(dayCell, 'items-center');
  //     }

  //     // Cells with day numbers
  //     this.renderer.appendChild(dayCell, this.renderer.createText(`${currentDay}`));

  //     this.renderer.appendChild(cell, dayCell);
  //     this.renderer.appendChild(row, cell);
  //   }

  //   // Append the row to the calendar body
  //   this.renderer.appendChild(calendarBody, row);
  // }
}
