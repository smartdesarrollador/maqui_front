import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MotosPorServicioService,
  Moto,
  TipoMoto,
} from '../../../services/services_motos/motos-por-servicio.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-motos-por-tipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './motos-por-tipo.component.html',
  styleUrl: './motos-por-tipo.component.css',
})
export class MotosPorTipoComponent implements OnInit {
  protected readonly baseUrl = environment.urlRaiz;
  private motoService = inject(MotosPorServicioService);

  motos: Moto[] = [];
  tiposMotos: TipoMoto[] = [];
  searchTerm = '';
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 8;
  selectedTipo = '';
  isLoading = false;

  ngOnInit(): void {
    this.loadTiposMotos();
    this.loadMotos();
  }

  loadTiposMotos(): void {
    this.isLoading = true;
    this.motoService.getTiposMotos().subscribe({
      next: (response) => {
        this.tiposMotos = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando tipos de motos:', error);
        this.isLoading = false;
      },
    });
  }

  loadMotos(): void {
    this.isLoading = true;
    this.motoService
      .getMotos({
        tipo: this.selectedTipo,
        search: this.searchTerm,
        page: this.currentPage,
        per_page: this.itemsPerPage,
        sort_by: 'created_at',
        sort_order: 'desc',
      })
      .subscribe({
        next: (response) => {
          this.motos = response.data.data;
          this.totalPages = response.data.last_page;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error cargando motos:', error);
          this.isLoading = false;
        },
      });
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadMotos();
  }

  onTipoChange(tipo: string): void {
    this.selectedTipo = tipo;
    this.currentPage = 1;
    this.loadMotos();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMotos();
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(price);
  }
}
