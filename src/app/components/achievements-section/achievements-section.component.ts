import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements-section',
  templateUrl: './achievements-section.component.html',
  styleUrls: ['./achievements-section.component.scss']
})
export class AchievementsSectionComponent {

  activeDetails: number = -1;

  achievementsList = [
    {
      id: 0,
      title: 'Kurs trenera personalnego',
      date: '20.10.2019',
      description: 'Kurs trenera personalnego w Akademii Wychowania Fizycznego w Krakowie',
      src: 'assets/images/certyficate_1.webp'
    },
    {
      id: 1,
      title: 'Kurs ćwieczenia fizycznego dla kobiet',
      date: '17.04.2020',
      description: 'Kurs z zakresu ćwiczeń fizycznych dla kobiet w Akademii Sportu i Kultury Fizycznej w Szczebrzeszynie',
      src: 'assets/images/certyficate_2.webp'
    },
    {
      id: 2,
      title: 'Szkolenie z zakresu dietetyki sportowej',
      date: '25.07.2022',
      description: 'Szkolenie z zakresu dietetyki sportowej w Poradni Zdrowego Żywienia w Krakowie',
      src: 'assets/images/certyficate_3.webp'
    },
    {
      id: 3,
      title: 'Pierwsze miejsce w zawodach fitness',
      date: '20.10.2019',
      description: 'Pierwsze miejsce w zawodach fitness w tak zwanym "Trójboju Pakerskim" na olimpiadzie akademickiej w Sosnowcu',
      src: 'assets/images/trophy_1.webp'
    },
    {
      id: 4,
      title: 'Pierwsze miejsce w amatorskich zawodach strongman',
      date: '20.10.2019',
      description: 'Pierwsze miejsce w amatorskich zawodach strongman w kategorii do 90kg w Sosnowcu',
      src: 'assets/images/trophy_2.webp'
    }

  ]

  showDetails(id: number) {
    if (this.activeDetails === id) {
      this.activeDetails = -1;
    } else {
      this.activeDetails = id;
    }
  }
}
