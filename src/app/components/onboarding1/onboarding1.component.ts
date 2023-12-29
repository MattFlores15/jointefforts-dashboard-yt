import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-onboarding1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './onboarding1.component.html',
  styleUrl: './onboarding1.component.css'
})
export class Onboarding1Component {

  constructor(private router: Router) {}

  navigateToNextPage() {
    // Navigate to the next onboarding page (onboarding2)
    this.router.navigate(['/onboarding2']);
  }
}
