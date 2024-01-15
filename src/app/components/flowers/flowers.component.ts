import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RouterModule } from '@angular/router';
import { BadgeService } from '../services/badge.service';

interface Flower {
  id: string;
  name: string;
  image: string;
  description?: string;
  helping?: string;
  question?: string;
  badge?: string;
  unlocked?: boolean;
  initiallyUnlocked?: boolean;
}

@Component({
  selector: 'app-flowers',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
export class FlowersComponent implements OnInit{

constructor(private badgeService: BadgeService) {}


  flowerCount: number = 0;


 // Function to determine initially unlocked flowers
ngOnInit(): void {
    this.initializeFlowers();
    this.randomlyUnlockFlowers();
    this.calculateFlowerCount();
  }

initializeFlowers(): void {
  const initiallyUnlockedCount = 3;
  const initiallyUnlockedFlowers: Flower[] = this.flowers
    .filter((flower) => flower.initiallyUnlocked)
    .slice(0, initiallyUnlockedCount);

  const remainingSlotsCount = 13 - initiallyUnlockedFlowers.length;
  const noFlowerSlots: Flower[] = Array.from({ length: remainingSlotsCount }, (_, index) => ({
    id: `no-flower-${index + 1}`,
    name: 'No flower',
    image: '../../../assets/images/plants/no-planted.png',
    badge: '../../../assets/images/plants/badges/no-badge.png',
    description: `<p>Je hebt nog geen bloem geplant.</p>`,
    unlocked: false,
    initiallyUnlocked: false,
  }));

  const unlockableFlowers = this.flowers.filter(
    (flower) =>
      !flower.id.startsWith('no-flower') &&
      flower.id !== 'sunflower' &&
      flower.id !== 'rose' &&
      flower.id !== 'lavender' &&
      (!flower.unlocked || flower.initiallyUnlocked) &&
      !flower.initiallyUnlocked
  );

  const randomlyUnlockedElements = this.shuffleArray(unlockableFlowers).slice(0, 2);

  // Combine initially unlocked flowers, no flower slots, and randomly unlocked flowers
  this.flowers = initiallyUnlockedFlowers.concat(noFlowerSlots, randomlyUnlockedElements);

  // Shuffle the entire array to randomize the positions
  this.shuffleArray(this.flowers);
}


randomlyUnlockFlowers(): void {
  const unlockableFlowers = this.flowers.filter(
    (flower) =>
      !flower.id.startsWith('no-flower') &&
      flower.id !== 'sunflower' &&
      flower.id !== 'rose' &&
      flower.id !== 'lavender' &&
      (!flower.unlocked || flower.initiallyUnlocked) &&
      !flower.initiallyUnlocked
  );

  console.log('All Flowers:', this.flowers);
  console.log('Unlockable Flowers:', unlockableFlowers);

  const randomlyUnlockedElements = this.shuffleArray(unlockableFlowers).slice(0, 2);

  console.log('Randomly Unlocked Flowers:', randomlyUnlockedElements);

  randomlyUnlockedElements.forEach((flower) => {
    flower.unlocked = true;
  });
   this.calculateFlowerCount();
}


calculateFlowerCount(): void {
  this.flowerCount = this.flowers.filter((flower) => flower.unlocked).length;
  this.badgeService.updateFlowerCount(this.flowerCount);
}


  // Shuffle array function
  shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }


  return array;
}


// Add a new property to track whether the mouse is over the popup
mouseOverPopup: boolean = false;

  flowers: Flower[] = [
    {
      id:'no-flower',
      name: 'No flower',
      image: '../../../assets/images/plants/no-planted.png',
      badge:'../../../assets/images/plants/badges/no-badge.png',
      description: `
        <p>Je hebt nog geen bloem geplant.</p>
      `,
      unlocked: false,
      initiallyUnlocked: false,
    },
    {
      id: 'sunflower',
      name: 'Sunflower',
      image: '../../../assets/images/plants/sunflower-planted.png',
      badge:'../../../assets/images/plants/badges/sunflower.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: '<p>De bloemknoppen en jonge bloemen draaien langzaam mee met de zon als <p>deze zich verplaatst van oost naar west. De zonnebloem bloeit op grote hoogte. Sommige soorten kunnen wel 3 meter hoog worden.</p>' ,
      unlocked: true,
      initiallyUnlocked: true,
    },
    {
      id: 'rose',
      name: 'Rose',
      image: '../../../assets/images/plants/rose-planted.png',
      badge:'../../../assets/images/plants/badges/rose.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Wist je dat rozen in Nederland bekend zijn vanaf de zestiende
        eeuw. Toen werden rozen vooral geteeld in formele paleistuinen. In
        1829 bestonden er al 2562 verschillende soorten rozen. Maar
        mogelijk is de teelt van rozen al zo'n 5000 jaar geleden in de
        buurt van de Indus-vallei of in China voor het eerst ontstaan.</p>
      `,
      unlocked: true,
      initiallyUnlocked: true,
    },
    {
      id: 'lavender',
      name: 'Lavender',
      image: '../../../assets/images/plants/lavender-planted.png',
      badge:'../../../assets/images/plants/badges/lavender.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Lavendel wordt door veel mensen gezien als medicinaal middel.
        Het zou kalmerend zijn voor de zenuwen en het zou de geest in balans brengen.
        Tip: leg een takje lavendel naast je kussen in bed. Geeft een rustig gevoel én een fijn geurtje!
        Je treft het zo nu en dan ook in Franse hotels aan.</p>
      `,
      unlocked: true,
      initiallyUnlocked: true,
    },
    {
      id: 'daisy',
      name: 'Daisy',
      image: '../../../assets/images/plants/daisy-planted.png',
      badge:'../../../assets/images/plants/badges/daisy.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Madeliefjes symboliseren onschuld en puurheid. Ze worden vaak geassocieerd met
        jeugdige liefde en romantiek.</p>
      `,
      unlocked: false,
      initiallyUnlocked: false,
    },
    {
      id: 'tulip',
      name: 'Tulip',
      image: '../../../assets/images/plants/tulip-planted.png',
      badge:'../../../assets/images/plants/badges/tulip.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Tulpen zijn oorspronkelijk afkomstig uit Turkije en werden in de 16e eeuw naar Nederland gebracht.
        In de 17e eeuw was er zelfs een economische bubbel bekend als "Tulpenmanie" vanwege de hoge prijzen van tulpenbollen.</p>
      `,
      unlocked: false,
      initiallyUnlocked: false,
    },
    {
      id: 'orchid',
      name: 'Orchid',
      image: '../../../assets/images/plants/orchid-planted.png',
      badge:'../../../assets/images/plants/badges/orchid.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Orchideeën zijn een van de grootste plantenfamilies ter wereld, met meer dan 25.000 soorten.
        Ze staan ​bekend om hun diverse bloemvormen en kleuren.</p>
      `,
      unlocked: false,
      initiallyUnlocked: false,
    },
    {
      id: 'lily',
      name: 'Lily',
      image: '../../../assets/images/plants/lily-planted.png',
      badge:'../../../assets/images/plants/badges/lily.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Lelies symboliseren zuiverheid en majesteit. Ze worden vaak geassocieerd met
        goddelijke betekenis in verschillende culturen.</p>
      `,
      unlocked: false,
      initiallyUnlocked: false,
    },
    {
      id: 'carnation',
      name: 'Carnation',
      image: '../../../assets/images/plants/carnation-planted.png',
      badge:'../../../assets/images/plants/badges/carnation.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Anjers worden vaak geassocieerd met liefde en genegenheid. In verschillende kleuren
        hebben ze verschillende symbolische betekenissen.</p>
      `,
      unlocked: false,
      initiallyUnlocked: false,
    },
    {
      id: 'daffodil',
      name: 'Daffodil',
      image: '../../../assets/images/plants/daffodil-planted.png',
      badge:'../../../assets/images/plants/badges/daffodil.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Narcissen worden vaak geassocieerd met lenteseizoen en symboliseren
        vernieuwing en wedergeboorte.</p>
      `,
    },
    {
      id: 'cactus',
      name: 'Cactus',
      image: '../../../assets/images/plants/cactus-planted.png',
      badge:'../../../assets/images/plants/badges/cactus.png',
      question: '<i class="fa-solid fa-book"></i><h2>Wist je dat?</h2>',
      description: `
        <p>Cactussen staan bekend om hun vermogen om te overleven in droge omgevingen.
        Ze slaan water op in hun stengels en kunnen lange perioden zonder regen overleven.</p>
      `,
      unlocked: false,
      
    },
  ];

  visibleFlowerId: string | null = null;

  showModal(flowerId: string): void {
    this.visibleFlowerId = flowerId;
  }

  hideModal(): void {
    this.visibleFlowerId = null;
  }

  // Add a new function to hide the popup only when the mouse is not over it
hideModalContainer(): void {
  if (!this.mouseOverPopup) {
    this.visibleFlowerId = null;
  }
}

// Function to set the mouseOverPopup property
setMouseOverPopup(value: boolean): void {
  this.mouseOverPopup = value;
}

}
