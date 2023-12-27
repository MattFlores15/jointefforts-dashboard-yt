import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // or import { ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
import { AuthService } from './components/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    // AppComponent,
    // ... your components
  ],
  imports: [
    CommonModule,
    FormsModule, // or ReactiveFormsModule
    ReactiveFormsModule,
    SlickCarouselModule
    // ... other modules
  ],
  providers: [AuthService], 
//   bootstrap: [AppComponent],
})
export class AppModule { }
