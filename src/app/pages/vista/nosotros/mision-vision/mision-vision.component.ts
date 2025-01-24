import { Component } from '@angular/core';
import { Post3Component } from '../../../../layout/componentes/post-3/post-3.component';
import { CarouselOwl2Component } from '../../../../layout/componentes/carousel-owl-2/carousel-owl-2.component';
import { InfoMisionVisionComponent } from './info-mision-vision/info-mision-vision.component';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [Post3Component, CarouselOwl2Component, InfoMisionVisionComponent],
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.css',
})
export class MisionVisionComponent {}
