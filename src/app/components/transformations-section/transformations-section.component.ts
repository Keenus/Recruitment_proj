import { Component } from '@angular/core';

@Component({
  selector: 'app-transformations-section',
  templateUrl: './transformations-section.component.html',
  styleUrls: ['./transformations-section.component.scss']
})
export class TransformationsSectionComponent {

  clientsTransformations = [
    {
      id: 0,
      client: 'Zbigniew',
      title: '30 kg w 9 miesięcy',
      description: 'Zbigniew zrzucił 30 kg w 9 miesięcy. Zmienił swoje nawyki żywieniowe i zaczął regularnie ćwiczyć. Teraz czuje się dużo lepiej i ma więcej energii.',
      weight_before: 120,
      weight_after: 90,
      duration: 270,
      image: 'assets/images/transformations_3.webp',
      diet: 'Proste dania z dużą ilością białka.'
    },
    {
      id: 1,
      client: 'Zenon',
      title: '12 kg w 6 miesięcy',
      description: 'Zenon zrzucił 12 kg w 6 miesięcy. Celem było zrzucenie tkanki tłuszczowej i zbudowanie masy mięśniowej. Mając 40 lat, Zenon pokazał, że nigdy nie jest za późno na zmiany.',
      weight_before: 86,
      weight_after: 74,
      duration: 180,
      image: 'assets/images/transformations_1.webp',
      diet: 'Dania głównie z jajek i ryżu.'
    },
    {
      id: 2,
      client: 'Żaneta',
      title: '6kg w 6 miesiące',
      description: 'Celem było zbudowanie masy mięśniowej i zrzucenie tkanki tłuszczowej. Żaneta zrzuciła 6 kg w 6 miesięcy. Jej tkanka tłuszczowa spadła o 5% a masa mięśniowa wzrosła o 3%.',
      weight_before: 65,
      weight_after: 59,
      duration: 180,
      image: 'assets/images/transformations_2.webp',
      diet: 'Dania z dużą ilością białka i warzyw.'
    },

  ]

}
