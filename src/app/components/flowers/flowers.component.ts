import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface Flower {
  id: string;
  name: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-flowers',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css'],
   animations: [
    trigger('popUpAnimation', [
      state('*', style({ transform: 'scale(1)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('300ms ease-in-out'),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'scale(0.5)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class FlowersComponent {

   flowers: Flower[] = [
    { id: 'sunflower', name: 'Sunflower', image: '../../../assets/images/plants/sunflower-planted.png', description: 'Sunflowers are known for being “happy” flowers, making them the perfect gift to bring joy to someone\'s (or your) day.' },
    { id: 'rose', name: 'Rose', image: '../../../assets/images/plants/rose-planted.png', description: 'Roses are a classic flower that symbolize love, romance, and friendship. They come in many different colors and each color has a different meaning.' },
    { id: 'lavender', name: 'Lavender', image: '../../../assets/images/plants/lavender-planted.png', description: 'Lavender is known for its strong, calming scent. It is often used in aromatherapy to promote relaxation and reduce stress.' },
  ];

  visibleFlowerId: string | null = null;

  showModal(flowerId: string): void {
    this.visibleFlowerId = flowerId;
  }

  hideModal(): void {
    this.visibleFlowerId = null;
  }

}
