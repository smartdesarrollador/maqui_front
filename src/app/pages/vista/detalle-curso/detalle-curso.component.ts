import { Component } from '@angular/core';
import { VerCursoComponent } from '../../../layout/componentes/ver-curso/ver-curso.component';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [VerCursoComponent],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css',
})
export class DetalleCursoComponent {}
