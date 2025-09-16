import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MotosPorServicioService } from '../../../services/services_motos/motos-por-servicio.service';

interface TipoMoto {
  id_tipo_moto: number;
  nombre: string;
  descripcion: string;
  motos_count: number;
  imagen?: string;
}

@Component({
  selector: 'app-section-tipos-motos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-tipos-motos.component.html',
  styleUrl: './section-tipos-motos.component.css',
})
export class SectionTiposMotosComponent implements OnInit {
  private motoService = inject(MotosPorServicioService);

  tiposMotos: TipoMoto[] = [];
  isLoading = false;

  // Mapeo de imágenes por nombre de tipo
  private imagenesMap: { [key: string]: string } = {
    'Pisteras': 'assets/images/section-tipos-motos/pistera.jpg',
    'Deportiva': 'assets/images/section-tipos-motos/custom.jpg',
    'Todo Terreno': 'assets/images/section-tipos-motos/todo_terreno.jpg',
    'Eléctrica': 'assets/images/section-tipos-motos/ciudad.jpg',
    'Utilitarias': 'assets/images/section-tipos-motos/utilitaria.jpg',
    'Scooter': 'assets/images/section-tipos-motos/scooter.jpg',
    'Doble Propósito': 'assets/images/section-tipos-motos/todo_terreno.jpg'
  };

  ngOnInit(): void {
    this.loadTiposMotos();
  }

  loadTiposMotos(): void {
    this.isLoading = true;
    this.motoService.getTiposMotos().subscribe({
      next: (response) => {
        this.tiposMotos = response.data.map(tipo => ({
          ...tipo,
          imagen: this.imagenesMap[tipo.nombre] || 'assets/images/section-tipos-motos/pistera.jpg'
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando tipos de motos:', error);
        this.isLoading = false;
      },
    });
  }

  getTipoMotoUrl(tipoId: number): string {
    return `/motos-por-tipo?tipo=${tipoId}`;
  }
}
