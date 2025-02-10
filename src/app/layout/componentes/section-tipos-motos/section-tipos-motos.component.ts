import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TipoMoto {
  nombre: string;
  imagen: string;
  ruta: string;
}

@Component({
  selector: 'app-section-tipos-motos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-tipos-motos.component.html',
  styleUrl: './section-tipos-motos.component.css',
})
export class SectionTiposMotosComponent {
  readonly tiposMotos: TipoMoto[] = [
    {
      nombre: 'PISTERAS',
      imagen: 'assets/images/section-tipos-motos/pistera.jpg',
      ruta: '/motos/pisteras',
    },
    {
      nombre: 'CUSTOM',
      imagen: 'assets/images/section-tipos-motos/custom.jpg',
      ruta: '/motos/custom',
    },
    {
      nombre: 'TODO TERRENO',
      imagen: 'assets/images/section-tipos-motos/todo_terreno.jpg',
      ruta: '/motos/todo-terreno',
    },

    {
      nombre: 'URBANA',
      imagen: 'assets/images/section-tipos-motos/ciudad.jpg',
      ruta: '/motos/urbana',
    },

    {
      nombre: 'UTILITARIA',
      imagen: 'assets/images/section-tipos-motos/utilitaria.jpg',
      ruta: '/motos/utilitaria',
    },

    {
      nombre: 'SCOOTER',
      imagen: 'assets/images/section-tipos-motos/scooter.jpg',
      ruta: '/motos/scooter',
    },
  ];
}
