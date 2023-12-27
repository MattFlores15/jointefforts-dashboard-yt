import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding2',
  standalone: true,
  // imports: [],
  templateUrl: './onboarding2.component.html',
  styleUrl: './onboarding2.component.css'
})
export class Onboarding2Component {
   constructor(private router: Router) {}

  navigateToNextPage() {
    // Navigate to the next onboarding page (onboarding2)
    this.router.navigate(['/login']);
  }
}
