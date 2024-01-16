import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle, RouterModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

  
  cardsData = [
    {
        bgColor: '#9A9AFF',
        icon: 'fas fa-rocket',
        title: 'Aan de slag',
        questions: [
            'Hoe krijg ik toegang tot de Enquêtes pagina?',
            'Welke soorten enquêtes zijn beschikbaar?',
            'Hoe kan ik mijn voortgang volgen op...',
            'Waar kan ik een algehele voortgang vinden...',
            'Hoe filter ik enquêtes op categorie?',
          
        ]
    },
    {
        bgColor: '#72D9FF',
        icon: 'fas fa-clipboard-list',
        title: 'Deelnemen aan Enquêtes',
        questions: [
            'Hoe begin ik aan een nieuwe enquête?',
            'Kan ik mijn voortgang opslaan en hervatten...',
            'Wat als ik technische problemen tegenkom...',
            'Is er een aanbevolen frequentie...',
            'Kan ik enquêtes overslaan als ze niet van toepassing zijn...',
         
        ]
    },
    {
        bgColor: '#D0D0FF',
        icon: 'fas fa-square-poll-vertical',
        title: 'Resultaten Begrijpen',
        questions: [
            'Waar kan ik de resultaten van mijn...',
            'Welke positieve resultaten kan ik verwachten...',
            'Hoe vaak worden enquêteresultaten bijgewerkt?',
            'Kan ik mijn enquêteresultaten delen met...',
            'Hoe interpreteer ik de visualisaties...',
      
        ]
    },
    {
        bgColor: '#F2AC57',
        icon: 'fas fa-newspaper',
        title: 'Op de hoogte blijven (Nieuws)',
        questions: [
            'Welke inhoud bevat de Nieuwspagina...',
            'Hoe vaak wordt de Nieuwspagina bijgewerkt?',
            'Kan ik onderwerpen suggereren voor de Nieuwspagina?',
            'Hoe navigeer ik naar de Nieuwspagina...',
            'Zijn er meldingen voor belangrijke gebeurtenissen...',
  
        ]
    },
    {
        bgColor: '#14A38B',
        icon: 'fas fa-circle-question',
        title: 'Ondersteuning Zoeken',
        questions: [
            'Hoe kan ik hulp krijgen bij technische zaken...',
            'Is er een gemeenschapsforum voor gebruikers...',
            'Welke bronnen zijn beschikbaar voor geestelijke...',
            'Kan ik feedback geven over het dashboard...',
            'Zijn er trainingsmaterialen beschikbaar...',
       
        ]
    },
    {
        bgColor: '#FF7171',
        icon: 'fas fa-table-columns',
        title: 'Algemene Dashboard Navigatie',
        questions: [
            'Hoe krijg ik toegang tot de Enquêtes pagina?',
            'Welke soorten enquêtes zijn beschikbaar?',
            'Hoe kan ik mijn voortgang volgen op...',
            'Waar kan ik een algehele voortgang vinden...',
            'Hoe filter ik enquêtes op categorie?',
        ]
    },
];


  i!: number;
  // Function to get background color for the icon based on card index
  getIconColor(index: number): string {

    const colors = ['#ff6347', '#00bfff', '#8a2be2', '#32cd32', '#ffa500', '#9370db'];
    return colors[index % colors.length];
  }

  // Declare i variable to satisfy Angular type checking
  iconIndex!: number;
  // Function to get fontawesome icon class dynamically based on card index
  getFontAwesomeIcon(index: number): string {
  
    const iconClasses = "['fa-solid', 'fa-rocket', 'fa-cogs', 'fa-question-circle']";
    return iconClasses[index % iconClasses.length];
  }

}
