import { Component } from '@angular/core';
import { FlowersComponent } from '../flowers/flowers.component';

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [FlowersComponent],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css'
})
export class RewardsComponent {

}
