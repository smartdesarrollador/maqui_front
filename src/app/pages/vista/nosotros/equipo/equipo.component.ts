import { Component } from '@angular/core';
import { CarouselOwl2Component } from '../../../../layout/componentes/carousel-owl-2/carousel-owl-2.component';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CarouselOwl2Component],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent {}
