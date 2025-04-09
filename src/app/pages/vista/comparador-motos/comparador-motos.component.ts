import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComparadorMotosService } from '../../../services/services_motos/comparador-motos.service';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
interface ModeloMoto {
  id: number;
  nombre: string;
  marca: string;
  cilindrada: number;
  imagen: string;
  nombre_completo: string;
}

interface ModeloSeleccionado {
  id: number;
  posicion: number;
  nombreCompleto: string;
}

// Estructura completa para evitar errores "Object is possibly 'undefined'"
const datosComparacionVacio = {
  modelos: [] as any[],
  caracteristicas: {
    colores: [] as string[],
    motor_suspension: {
      motor: [] as string[],
      cilindrada: [] as string[],
      potencia: [] as string[],
      arranque: [] as string[],
      transmision: [] as string[],
      capacidad_tanque: [] as string[],
      suspension_delantera: [] as string[],
      suspension_posterior: [] as string[],
    },
    bateria_rendimiento: {
      potencia_bateria: [] as string[],
      tipo_bateria: [] as string[],
      bateria_extraible: [] as string[],
      vida_util_bateria: [] as string[],
      tipo_tomacorriente: [] as string[],
      tiempo_carga: [] as string[],
    },
    dimensiones_peso: {
      peso_neto: [] as string[],
      carga_util: [] as string[],
      peso_bruto: [] as string[],
      largo: [] as string[],
      ancho: [] as string[],
      alto: [] as string[],
    },
    llantas_frenos: {
      neumatico_delantero: [] as string[],
      neumatico_posterior: [] as string[],
      freno_delantero: [] as string[],
      freno_posterior: [] as string[],
    },
    adicionales: {
      cargador_usb: [] as string[],
      luz_led: [] as string[],
      alarma: [] as string[],
      cajuela: [] as string[],
      tablero_led: [] as string[],
      mp3: [] as string[],
      bluetooth: [] as string[],
    },
  },
};

@Component({
  selector: 'app-comparador-motos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './comparador-motos.component.html',
  styleUrl: './comparador-motos.component.css',
})
export class ComparadorMotosComponent implements OnInit {
  // Inyectamos el servicio
  private comparadorService = inject(ComparadorMotosService);

  // URL base para imágenes
  urlDominio = environment.dominio;

  // Datos para la vista
  modelos = signal<ModeloMoto[]>([]);
  modelosSeleccionados = signal<ModeloSeleccionado[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);

  // Datos para la comparación
  datosComparacion = this.comparadorService.datosComparacion;

  // IDs para los modelos seleccionados en los select
  modeloSeleccionado1: number | null = null;
  modeloSeleccionado2: number | null = null;
  modeloSeleccionado3: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.cargarModelos();
  }

  /**
   * Carga todos los modelos disponibles para comparar
   */
  cargarModelos(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.comparadorService.obtenerModelosDisponibles().subscribe({
      next: (respuesta) => {
        if (respuesta.status === 'success') {
          this.modelos.set(respuesta.modelos);
        } else {
          this.error.set('Error al cargar los modelos');
        }
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al obtener modelos', err);
        this.error.set(
          'Error al cargar los modelos. Por favor, intente nuevamente.'
        );
        this.cargando.set(false);
      },
    });
  }

  /**
   * Actualiza la comparación cuando cambia la selección de modelos
   */
  actualizarComparacion(): void {
    // Obtenemos los IDs de los modelos seleccionados (filtrando los nulls)
    const idsModelos = [
      this.modeloSeleccionado1,
      this.modeloSeleccionado2,
      this.modeloSeleccionado3,
    ].filter((id) => id !== null) as number[];

    if (idsModelos.length === 0) {
      this.comparadorService.limpiarComparacion();
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    // Enviamos los IDs de los modelos directamente
    this.comparadorService.compararModelos(idsModelos).subscribe({
      next: (respuesta) => {
        if (respuesta.status === 'success') {
          this.comparadorService.establecerDatosComparacion(respuesta.data);
          this.actualizarModelosSeleccionados(respuesta.data.modelos);
        } else {
          this.error.set('Error al comparar modelos');
        }
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al comparar modelos', err);
        this.error.set(
          'Error al comparar modelos. Por favor, intente nuevamente.'
        );
        this.cargando.set(false);
      },
    });
  }

  /**
   * Actualiza la lista de modelos seleccionados para mostrar en la UI
   */
  actualizarModelosSeleccionados(modelos: any[]): void {
    const seleccionados: ModeloSeleccionado[] = modelos.map((modelo) => ({
      id: modelo.id,
      posicion: modelo.numero,
      nombreCompleto: modelo.nombre,
    }));

    this.modelosSeleccionados.set(seleccionados);
  }

  /**
   * Maneja el cambio en la selección del modelo 1
   */
  onCambioModelo1(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.modeloSeleccionado1 = select.value ? parseInt(select.value, 10) : null;
    this.actualizarComparacion();
  }

  /**
   * Maneja el cambio en la selección del modelo 2
   */
  onCambioModelo2(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.modeloSeleccionado2 = select.value ? parseInt(select.value, 10) : null;
    this.actualizarComparacion();
  }

  /**
   * Maneja el cambio en la selección del modelo 3
   */
  onCambioModelo3(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.modeloSeleccionado3 = select.value ? parseInt(select.value, 10) : null;
    this.actualizarComparacion();
  }

  /**
   * Limpia la comparación actual
   */
  limpiarComparacion(): void {
    this.modeloSeleccionado1 = null;
    this.modeloSeleccionado2 = null;
    this.modeloSeleccionado3 = null;
    this.comparadorService.limpiarComparacion();
    this.modelosSeleccionados.set([]);
  }

  /**
   * Encuentra y devuelve el nombre completo de un modelo por su ID
   */
  obtenerNombreModelo(id: number): string {
    const modelo = this.modelos().find((m) => m.id === id);
    return modelo ? modelo.nombre : '';
  }

  /**
   * Determina si un modelo ya está seleccionado en otro selector
   */
  modeloYaSeleccionado(id: number, posicionActual: number): boolean {
    // Si la posición actual es 1, verifica si está en 2 o 3
    if (posicionActual === 1) {
      return id === this.modeloSeleccionado2 || id === this.modeloSeleccionado3;
    }
    // Si la posición actual es 2, verifica si está en 1 o 3
    else if (posicionActual === 2) {
      return id === this.modeloSeleccionado1 || id === this.modeloSeleccionado3;
    }
    // Si la posición actual es 3, verifica si está en 1 o 2
    else {
      return id === this.modeloSeleccionado1 || id === this.modeloSeleccionado2;
    }
  }

  /**
   * Maneja la acción del botón "Cotizar" para un modelo específico
   */
  cotizarModelo(id: number): void {
    // Aquí se podría implementar la redirección a la página de cotización
    console.log('Cotizar modelo con ID:', id);
    // Ejemplo: this.router.navigate(['/cotizar', id]);
  }

  /**
   * Obtiene la URL completa de una imagen añadiendo el dominio
   */
  getImageUrl(imagePath: string): string {
    if (!imagePath) return '';

    // Si la ruta ya incluye el dominio o es una URL completa (http/https), la devuelve sin cambios
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }

    // De lo contrario, añade el dominio
    return `${this.urlDominio}/${imagePath}`;
  }
}
