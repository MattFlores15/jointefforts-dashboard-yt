import { Component } from '@angular/core';
import { FlowersComponent } from '../flowers/flowers.component';
import { NewsCardComponent } from '../news-card/news-card.component';
import { RouterModule } from '@angular/router';
import { FlowerProgressComponent } from '../flower-progress/flower-progress.component';

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [FlowersComponent, NewsCardComponent, RouterModule, FlowerProgressComponent],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css'
})
export class RewardsComponent {


}
