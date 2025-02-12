import { Component } from '@angular/core';
import { PostVentaDescripcionComponent } from '../../../layout/componentes/post-venta-descripcion/post-venta-descripcion.component';
import { PostVentaMantenimientoComponent } from '../../../layout/componentes/post-venta-mantenimiento/post-venta-mantenimiento.component';
import { PostVentaPoliticaComponent } from '../../../layout/componentes/post-venta-politica/post-venta-politica.component';
import { PostVentaRecomendacionesComponent } from '../../../layout/componentes/post-venta-recomendaciones/post-venta-recomendaciones.component';

@Component({
  selector: 'app-post-venta',
  standalone: true,
  imports: [
    PostVentaDescripcionComponent,
    PostVentaMantenimientoComponent,
    PostVentaPoliticaComponent,
    PostVentaRecomendacionesComponent,
  ],
  templateUrl: './post-venta.component.html',
  styleUrl: './post-venta.component.css',
})
export class PostVentaComponent {}
