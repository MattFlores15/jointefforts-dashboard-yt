import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // or import { ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
import { AuthService } from './components/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CalendarModule} from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // AppComponent,
    // ... your components
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, // or ReactiveFormsModule
    ReactiveFormsModule,
    SlickCarouselModule,
    CalendarModule,
    RouterModule,
    // ... other modules
  ],
  providers: [AuthService], 
//   bootstrap: [AppComponent],
})
export class AppModule { }
