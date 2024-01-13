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



  flowers: Flower[] = [
    {
      id: 'sunflower',
      name: 'Sunflower',
      image: '../../../assets/images/plants/sunflower-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">maandelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.
        <h2>Wist je dat?</h2>
        De bloemknoppen en jonge bloemen draaien langzaam mee met de zon als deze zich
        verplaatst van oost naar west. De zonnebloem bloeit op grote hoogte. Sommige
        soorten kunnen wel 3 meter hoog worden. De meesten groeien echter tot 1,5
        tot 2,5 meter.
      `,
    },
    {
      id: 'rose',
      name: 'Rose',
      image: '../../../assets/images/plants/rose-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">wekelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.
        <h2>Wist je dat?</h2>
        Wist je dat rozen in Nederland bekend zijn vanaf de zestiende
        eeuw. Toen werden rozen vooral geteeld in formele paleistuinen. In
        1829 bestonden er al 2562 verschillende soorten rozen. Maar
        mogelijk is de teelt van rozen al zo'n 5000 jaar geleden in de
        buurt van de Indus-vallei of in China voor het eerst ontstaan.
      `,
    },
    {
      id: 'lavender',
      name: 'Lavender',
      image: '../../../assets/images/plants/lavender-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">halfjaarlijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook deze applicatie.
        <h2>Wist je dat?</h2>
        Lavendel wordt door veel mensen gezien als medicinaal middel.
        Het zou kalmerend zijn voor de zenuwen en het zou de geest in balans brengen.
        Tip: leg een takje lavendel naast je kussen in bed. Geeft een rustig gevoel én een fijn geurtje!
        Je treft het zo nu en dan ook in Franse hotels aan.
      `,
    },
    {
      id: 'daisy',
      name: 'Daisy',
      image: '../../../assets/images/plants/daisy-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">wekelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.
        <h2>Wist je dat?</h2>
        Madeliefjes symboliseren onschuld en puurheid. Ze worden vaak geassocieerd met
        jeugdige liefde en romantiek.
      `,
    },
    {
      id: 'tulip',
      name: 'Tulip',
      image: '../../../assets/images/plants/tulip-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">kwartaallijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook deze applicatie.
        <h2>Wist je dat?</h2>
        Tulpen zijn oorspronkelijk afkomstig uit Turkije en werden in de 16e eeuw naar Nederland gebracht.
        In de 17e eeuw was er zelfs een economische bubbel bekend als "Tulpenmanie" vanwege de hoge prijzen van tulpenbollen.
      `,
    },
    {
      id: 'orchid',
      name: 'Orchid',
      image: '../../../assets/images/plants/orchid-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">kwartaallijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook deze applicatie.
        <h2>Wist je dat?</h2>
        Orchideeën zijn een van de grootste plantenfamilies ter wereld, met meer dan 25.000 soorten.
        Ze staan ​bekend om hun diverse bloemvormen en kleuren.
      `,
    },
    {
      id: 'lily',
      name: 'Lily',
      image: '../../../assets/images/plants/lily-planted.png',
      description: `
        Deze plant heeft geholpen aan de 
        <a routerLink="../results/">maandelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.
        <h2>Wist je dat?</h2>
        Lelies symboliseren zuiverheid en majesteit. Ze worden vaak geassocieerd met
        goddelijke betekenis in verschillende culturen.
      `,
    },
    {
      id: 'carnation',
      name: 'Carnation',
      image: '../../../assets/images/plants/carnation-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">wekelijkse vragenlijst.</a>
        De resultaten van het onderzoek worden nog besproken en het gevolg hiervan kun je later bij de plant zien.
        <h2>Wist je dat?</h2>
        Anjers worden vaak geassocieerd met liefde en genegenheid. In verschillende kleuren
        hebben ze verschillende symbolische betekenissen.
      `,
    },
    {
      id: 'daffodil',
      name: 'Daffodil',
      image: '../../../assets/images/plants/daffodil-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/"> halfjaarlijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook deze applicatie.
        <h2>Wist je dat?</h2>
        Narcissen worden vaak geassocieerd met lenteseizoen en symboliseren
        vernieuwing en wedergeboorte.
      `,
    },
    {
      id: 'cactus',
      name: 'Cactus',
      image: '../../../assets/images/plants/cactus-planted.png',
      description: `
        Deze plant heeft geholpen aan de <a routerLink="../results/">kwartaallijkse vragenlijst.</a>
        De resultaten van het onderzoek zijn dat de vragenlijsten korter en leuker moeten, daarom ook deze applicatie.
        <h2>Wist je dat?</h2>
        Cactussen staan bekend om hun vermogen om te overleven in droge omgevingen.
        Ze slaan water op in hun stengels en kunnen lange perioden zonder regen overleven.
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

}
