import { Component } from '@angular/core';
import { BadgeService } from '../services/badge.service';
import { CommonModule } from '@angular/common';

interface Badge {
  id: number;
  name: string;
  image: string;
}
@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.css'
})


export class WelcomeCardComponent {

constructor(private badgeService: BadgeService) {}

badges: Badge[] = [
  {
      id: 0,
      name: 'no-badge',
      image: '../../../assets/images/plants/badges/no-badge.png',
  },
  {
    id: 1,
    name: 'cactus',
    image: '../../../assets/images/plants/badges/cactus.png',
  },
  {
    id: 2,
    name: 'carnation',
    image: '../../../assets/images/plants/badges/carnation.png',
  },
  {
    id: 3,
    name: 'daisy',
    image: '../../../assets/images/plants/badges/daisy.png',
  },
  {
    id: 4,
    name: 'daffodil',
    image: '../../../assets/images/plants/badges/daffodil.png',
  },
  {
    id: 5,
    name: 'lavender',
    image: '../../../assets/images/plants/badges/lavender.png',
  },
  {
    id: 6,
    name: 'lily',
    image: '../../../assets/images/plants/badges/lily.png',
  },
  {
    id: 7,
    name: 'rose',
    image: '../../../assets/images/plants/badges/rose.png',
  },
  {
    id: 8,
    name: 'sunflower',
    image: '../../../assets/images/plants/badges/sunflower.png',
  },
  {
    id: 9,
    name: 'tulip',
    image: '../../../assets/images/plants/badges/tulip.png',
  },
  {
    id: 10,
    name: 'orchid',
    image: '../../../assets/images/plants/badges/orchid.png',
  },
  {
    id: 11,
    name: 'flower',
    image: '../../../assets/images/plants/badges/flower.png',
  }
];

flowerCount: number = 0;

 randomBadge: Badge | null = null;
  randomIndex: number | null = null;

  ngOnInit(): void {
    this.badgeService.flowerCount$.subscribe((count) => {
      this.flowerCount = count;
      this.setRandomBadge();
    });
  }

  setRandomBadge(): void {
    const badgesWithoutNoBadge = this.badges.filter(badge => badge.name !== 'no-badge');

    if (badgesWithoutNoBadge.length > 0) {
      this.randomIndex = Math.floor(Math.random() * badgesWithoutNoBadge.length);
      this.randomBadge = badgesWithoutNoBadge[this.randomIndex];
    } else {
      // If there are no badges other than "no-badge", set randomBadge to null
      this.randomBadge = null;
    }
  }

}
