import { Component } from '@angular/core';
import {IsMobileService} from "../../services/isMobile/is-mobile.service";

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.scss']
})
export class ImagesSliderComponent {
  sliderImages = [
    {
      index: 0,
      src: 'assets/images/img1_section1.webp',
      alt: 'plan treningowy',
      headerText: 'Siła jest w Tobie!',
      paragraphText: 'Odkryj swoje nieograniczone możliwości',
    },
    {
      index: 1,
      src: 'assets/images/img2_section1.webp',
      alt: 'osiągnięcia',
      headerText: 'Silniejszy każdego dnia!',
      paragraphText: 'Małe kroki do wielkich zmian',
    },
    {
      index: 2,
      src: 'assets/images/img3_section1.webp',
      alt: 'siłownia',
      headerText: 'Przekraczaj swoje granice!',
      paragraphText: 'Siłownia to nie tylko miejsce, to podróż',
    },

  ];

  constructor() {
  }

  ngOnChanges() {
    this.autoChangeSlide();
  }

  currentSlide = 0;

  changeSlide(number: number) {
    if(this.currentSlide + number < 0) {
      this.currentSlide = this.sliderImages.length - 1;
      return;
    }
    if(this.currentSlide === this.sliderImages.length - 1 && number === 1) {
      this.currentSlide = 0;
      return;
    }
    this.currentSlide += number;
  }

  autoChangeSlide() {
    setInterval(() => {
      this.changeSlide(1);

    }, 1000);
  }
}
