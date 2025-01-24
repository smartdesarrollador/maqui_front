import { Component } from '@angular/core';
import { CardEspecialidadComponent } from '../../../layout/componentes/card-especialidad/card-especialidad.component';
import { JumbotronImagenComponent } from '../../../layout/componentes/jumbotron-imagen/jumbotron-imagen.component';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [CardEspecialidadComponent, JumbotronImagenComponent],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.css',
})
export class EspecialidadesComponent {}
