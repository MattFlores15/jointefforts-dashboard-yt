import { Component, OnInit } from '@angular/core';
import { CalendarModule, Islamic } from '@syncfusion/ej2-angular-calendars';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  public dateValue: Date = new Date();

  minDate!: Date;
  maxDate!: Date;
  selectedDate!: Date;
  start!: string;

  ngOnInit() {
    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);
    this.selectedDate = today;
    this.start = 'Week';
  }

  onNavigating(args: any) {
    const view = args.view;
    const firstDate = view === 'Week' ? args.currentDate : args.minDate;
    const lastDate = view === 'Week' ? args.currentDate : args.maxDate;
    args.isMultiSelection = false;
    args.element.querySelectorAll('.e-content tr').forEach((tr: HTMLElement) => {
      const dateElement = tr.querySelector('.e-day');
      const dataDateAttribute = dateElement?.getAttribute('data-date');

      if (dataDateAttribute) {
        const date = new Date(dataDateAttribute);

        if (date < firstDate || date > lastDate) {
          tr.style.display = 'none';
        } else {
          tr.style.display = '';
        }
      }
    });
  }


}
