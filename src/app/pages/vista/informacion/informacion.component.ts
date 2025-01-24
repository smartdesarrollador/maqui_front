import { Component } from '@angular/core';
import { Jumbotron2Component } from '../../../layout/componentes/jumbotron-2/jumbotron-2.component';
import { Section2Component } from '../../../layout/componentes/section-2/section-2.component';
import { GridImagenes1Component } from '../../../layout/componentes/grid-imagenes-1/grid-imagenes-1.component';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [Jumbotron2Component, Section2Component, GridImagenes1Component],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {}
