import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MotosPorServicioService, TipoMoto } from '../../../services/services_motos/motos-por-servicio.service';
import { environment } from '../../../../environments/environment';

interface TipoMotoExtended extends TipoMoto {
  imagenUrl?: string;
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
  protected readonly baseUrl = environment.urlRaiz;

  tiposMotos: TipoMotoExtended[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.loadTiposMotos();
  }

  loadTiposMotos(): void {
    this.isLoading = true;
    this.motoService.getTiposMotos().subscribe({
      next: (response) => {
        this.tiposMotos = response.data.map((tipo): TipoMotoExtended => ({
          ...tipo,
          imagenUrl: tipo.imagen
            ? `${this.baseUrl}/assets/imagen/tipo_motos/${tipo.imagen}`
            : `${this.baseUrl}/assets/imagen/tipo_motos/default.png`
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
