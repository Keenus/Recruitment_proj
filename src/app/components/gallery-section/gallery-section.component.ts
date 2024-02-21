import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent {
  galleryImages: string[] = [
    'assets/images/gallery_photo_1.jpg',
    'assets/images/gallery_photo_2.jpg',
    'assets/images/gallery_photo_3.jpg',
    'assets/images/gallery_photo_4.jpg',
    'assets/images/gallery_photo_5.jpg',
    'assets/images/gallery_photo_6.jpg',
    'assets/images/gallery_photo_7.jpg',
    'assets/images/gallery_photo_8.jpg',
    'assets/images/gallery_photo_9.jpg',
  ]

}
