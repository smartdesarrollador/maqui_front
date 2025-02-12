import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

interface InfoCard {
  titulo: string;
  icono: string;
  ruta: string;
}

@Component({
  selector: 'app-saludo-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './saludo-info.component.html',
  styleUrl: './saludo-info.component.css',
})
export class SaludoInfoComponent {
  readonly infoCards: InfoCard[] = [
    {
      titulo: 'FINANCIA TU MOTO AQUÍ',
      icono: 'assets/iconos/info/icono1.png',
      ruta: '/formulario-financiacion',
    },
    {
      titulo: 'GARANTÍA Y POST VENTA',
      icono: 'assets/iconos/info/icono2.png',
      ruta: '/post-venta',
    },
    {
      titulo: 'ENCUENTRA UN DISTRIBUIDOR',
      icono: 'assets/iconos/info/icono3.png',
      ruta: '/distribuidores',
    },
  ];
}
