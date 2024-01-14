import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RouterModule } from '@angular/router';

interface Flower {
  id: string;
  name: string;
  image: string;
  description?: string;
  helping?: string;
  question?: string;
  badge?: string;
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
export class FlowersComponent {

// Add a new property to track whether the mouse is over the popup
mouseOverPopup: boolean = false;

  flowers: Flower[] = [
    {
      id: 'sunflower',
      name: 'Sunflower',
      image: '../../../assets/images/plants/sunflower-planted.png',
      badge:'../../../assets/images/plants/badges/sunflower.png',
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">maandelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.</p>`,
      question: '<h2>Wist je dat?</h2>',
      description: '<p>De bloemknoppen en jonge bloemen draaien langzaam mee met de zon als <p>deze zich verplaatst van oost naar west. De zonnebloem bloeit op grote hoogte. Sommige soorten kunnen wel 3 meter hoog worden. De meesten groeien echter tot 1,5 tot 2,5 meter.</p>' ,
    },
    {
      id: 'rose',
      name: 'Rose',
      image: '../../../assets/images/plants/rose-planted.png',
      badge:'../../../assets/images/plants/badges/rose.png',
      helping: '<p>Deze plant heeft geholpen aan de <a routerLink="/results">wekelijkse vragenlijst.</a> De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.</p>',
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Wist je dat rozen in Nederland bekend zijn vanaf de zestiende
        eeuw. Toen werden rozen vooral geteeld in formele paleistuinen. In
        1829 bestonden er al 2562 verschillende soorten rozen. Maar
        mogelijk is de teelt van rozen al zo'n 5000 jaar geleden in de
        buurt van de Indus-vallei of in China voor het eerst ontstaan.</p>
      `,
    },
    {
      id: 'lavender',
      name: 'Lavender',
      image: '../../../assets/images/plants/lavender-planted.png',
      badge:'../../../assets/images/plants/badges/lavender.png',
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">halfjaarlijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook <p>deze applicatie.</p>`,
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Lavendel wordt door veel mensen gezien als medicinaal middel.
        Het zou kalmerend zijn voor de zenuwen en het zou de geest in balans brengen.
        Tip: leg een takje lavendel naast je kussen in bed. Geeft een rustig gevoel én een fijn geurtje!
        Je treft het zo nu en dan ook in Franse hotels aan.</p>
      `,
    },
    {
      id: 'daisy',
      name: 'Daisy',
      image: '../../../assets/images/plants/daisy-planted.png',
      badge:'../../../assets/images/plants/badges/daisy.png',
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">wekelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.</p>`,
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Madeliefjes symboliseren onschuld en puurheid. Ze worden vaak geassocieerd met
        jeugdige liefde en romantiek.</p>
      `,
    },
    {
      id: 'tulip',
      name: 'Tulip',
      image: '../../../assets/images/plants/tulip-planted.png',
      badge:'../../../assets/images/plants/badges/tulip.png',
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">kwartaallijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook <p>deze applicatie.</p>`,
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Tulpen zijn oorspronkelijk afkomstig uit Turkije en werden in de 16e eeuw naar Nederland gebracht.
        In de 17e eeuw was er zelfs een economische bubbel bekend als "Tulpenmanie" vanwege de hoge prijzen van tulpenbollen.</p>
      `,
    },
    {
      id: 'orchid',
      name: 'Orchid',
      image: '../../../assets/images/plants/orchid-planted.png',
      badge:'../../../assets/images/plants/badges/orchid.png',
      helping: '<p>Deze plant heeft geholpen aan de <a routerLink="/results">halfjaarlijkse vragenlijst.</a> De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook <p>deze applicatie.</p>',
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Orchideeën zijn een van de grootste plantenfamilies ter wereld, met meer dan 25.000 soorten.
        Ze staan ​bekend om hun diverse bloemvormen en kleuren.</p>
      `,
    },
    {
      id: 'lily',
      name: 'Lily',
      image: '../../../assets/images/plants/lily-planted.png',
      badge:'../../../assets/images/plants/badges/lily.png',
      helping: ' <p>Deze plant heeft geholpen aan de <a routerLink="/results">maandelijkse vragenlijst.</a> De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.</p>',
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Lelies symboliseren zuiverheid en majesteit. Ze worden vaak geassocieerd met
        goddelijke betekenis in verschillende culturen.</p>
      `,
    },
    {
      id: 'carnation',
      name: 'Carnation',
      image: '../../../assets/images/plants/carnation-planted.png',
      badge:'../../../assets/images/plants/badges/carnation.png',
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">wekelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.</p>`,
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Anjers worden vaak geassocieerd met liefde en genegenheid. In verschillende kleuren
        hebben ze verschillende symbolische betekenissen.</p>
      `,
    },
    {
      id: 'daffodil',
      name: 'Daffodil',
      image: '../../../assets/images/plants/daffodil-planted.png',
      badge:'../../../assets/images/plants/badges/daffodil.png',
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">kwartaallijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook <p>deze applicatie.</p>`,
      question: '<h2>Wist je dat?</h2>',
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
      helping: `
        <p>Deze plant heeft geholpen aan de <a routerLink="/results">halfjaarlijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook <p>deze applicatie.</p>`,
      question: '<h2>Wist je dat?</h2>',
      description: `
        <p>Cactussen staan bekend om hun vermogen om te overleven in droge omgevingen.
        Ze slaan water op in hun stengels en kunnen lange perioden zonder regen overleven.</p>
      `,
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
