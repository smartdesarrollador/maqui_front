import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMotoService } from '../../../services/services_motos/menu-moto.service';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
interface Moto {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  imagen: string;
  stock: number;
}

interface TipoMoto {
  id: number;
  nombre: string;
  motos: Moto[];
}

@Component({
  selector: 'app-menu-motos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-motos.component.html',
  styleUrls: ['./menu-motos.component.css'],
})
export class MenuMotosComponent {
  protected readonly baseUrl = environment.urlRaiz;
  private menuMotoService = inject(MenuMotoService);

  tiposMotos = signal<TipoMoto[]>([]);
  mostrarMenu = signal<boolean>(false);
  tipoSeleccionado = signal<string>('');
  private menuMovilVisible = signal(false);

  ngOnInit() {
    this.cargarMenuMotos();
  }

  cargarMenuMotos() {
    this.menuMotoService.getMenuMotos().subscribe({
      next: (data) => {
        this.tiposMotos.set(data);
        // Seleccionar el primer tipo por defecto si hay datos
        if (data.length > 0) {
          this.tipoSeleccionado.set(data[0].nombre);
        }
      },
      error: (err) => console.error('Error al cargar menú de motos:', err),
    });
  }

  toggleMenu() {
    this.mostrarMenu.update((value) => !value);
    // Si abrimos el menú y no hay tipo seleccionado, seleccionar el primero
    if (!this.tipoSeleccionado() && this.tiposMotos().length > 0) {
      this.tipoSeleccionado.set(this.tiposMotos()[0].nombre);
    }
  }

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado.set(tipo);
  }

  mostrarMenuMovil() {
    return this.menuMovilVisible();
  }

  toggleMobileMenu() {
    this.menuMovilVisible.update((value) => !value);
  }
}
