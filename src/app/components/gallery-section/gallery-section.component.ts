import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent {
  galleryImages: string[] = [
    'assets/images/gallery_photo_1.webp',
    'assets/images/gallery_photo_2.webp',
    'assets/images/gallery_photo_3.webp',
    'assets/images/gallery_photo_4.webp',
    'assets/images/gallery_photo_5.webp',
    'assets/images/gallery_photo_6.webp',
    'assets/images/gallery_photo_7.webp',
    'assets/images/gallery_photo_8.webp',
    'assets/images/gallery_photo_9.webp',
  ]

}
