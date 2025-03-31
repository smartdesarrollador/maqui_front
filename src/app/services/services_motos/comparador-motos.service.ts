import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

/**
 * Interfaz para los modelos disponibles para comparar
 */
interface ModeloMoto {
  id: number;
  nombre: string;
  marca: string;
  cilindrada: number;
  imagen: string;
  nombre_completo: string;
}

/**
 * Interfaz para los datos de comparación de motos
 */
interface DatosComparacion {
  modelos: {
    id: number;
    numero: number;
    nombre: string;
    marca: string;
    nombre_completo: string;
    imagen: string;
    precio_base: number;
  }[];
  caracteristicas: {
    colores: string[];
    motor_suspension: {
      motor: string[];
      cilindrada: string[];
      potencia: string[];
      arranque: string[];
      transmision: string[];
      capacidad_tanque: string[];
      suspension_delantera: string[];
      suspension_posterior: string[];
    };
    bateria_rendimiento: {
      potencia_bateria: string[];
      tipo_bateria: string[];
      bateria_extraible: string[];
      vida_util_bateria: string[];
      tipo_tomacorriente: string[];
      tiempo_carga: string[];
    };
    dimensiones_peso: {
      peso_neto: string[];
      carga_util: string[];
      peso_bruto: string[];
      largo: string[];
      ancho: string[];
      alto: string[];
    };
    llantas_frenos: {
      neumatico_delantero: string[];
      neumatico_posterior: string[];
      freno_delantero: string[];
      freno_posterior: string[];
    };
    adicionales: {
      cargador_usb: string[];
      luz_led: string[];
      alarma: string[];
      cajuela: string[];
      tablero_led: string[];
      mp3: string[];
      bluetooth: string[];
    };
  };
}

/**
 * Interfaz para el detalle de un modelo de moto
 */
interface DetalleMoto {
  id: number;
  nombre: string;
  marca: string;
  tipo: string;
  año: number;
  precio_base: number;
  color: string;
  stock: number;
  descripcion: string;
  imagen: string;
  especificaciones: {
    motor: string;
    cilindrada: number;
    potencia: string;
    arranque: string;
    transmision: string;
    capacidad_tanque: number;
    peso_neto: number;
    carga_util: number;
    peso_bruto: number;
    dimensiones: {
      largo: number;
      ancho: number;
      alto: number;
    };
    neumaticos: {
      delantero: string;
      posterior: string;
    };
    frenos: {
      delantero: string;
      posterior: string;
    };
    caracteristicas_adicionales: {
      cargador_usb: boolean;
      luz_led: boolean;
      alarma: boolean;
      cajuela: boolean;
      tablero_led: boolean;
      mp3: boolean;
      bluetooth: boolean;
    };
  };
}

/**
 * Interfaz para la marca con sus modelos
 */
interface MarcaConModelos {
  id: number;
  nombre: string;
  modelos: {
    id: number;
    nombre: string;
    cilindrada: number;
    imagen: string;
  }[];
}

/**
 * Interfaz para el tipo de moto
 */
interface TipoMoto {
  id: number;
  nombre: string;
  descripcion: string;
}

/**
 * Servicio para manejar la comparación de modelos de motos
 */
@Injectable({
  providedIn: 'root',
})
export class ComparadorMotosService {
  // Inyección del cliente HTTP
  private http = inject(HttpClient);

  // Base URL para las APIs
  private apiBaseUrl = `${environment.apiBaseUrl}/comparador-motos`;

  // Signals para manejar el estado reactivo
  modelosSeleccionados = signal<number[]>([]);
  datosComparacion = signal<DatosComparacion | null>(null);

  /**
   * Obtiene todos los modelos disponibles para comparar
   */
  obtenerModelosDisponibles(): Observable<{
    status: string;
    modelos: ModeloMoto[];
  }> {
    return this.http.get<{ status: string; modelos: ModeloMoto[] }>(
      `${this.apiBaseUrl}/modelos`
    );
  }

  /**
   * Compara hasta 3 modelos de motos
   * @param modelosIds Array con los IDs de las motos a comparar
   */
  compararModelos(
    modelosIds: number[]
  ): Observable<{ status: string; data: DatosComparacion }> {
    // Actualiza el signal de modelos seleccionados
    this.modelosSeleccionados.set(modelosIds);

    return this.http.post<{ status: string; data: DatosComparacion }>(
      `${this.apiBaseUrl}/comparar`,
      { modelos: modelosIds }
    );
  }

  /**
   * Obtiene los detalles de un modelo específico
   * @param id ID del modelo a consultar
   */
  obtenerDetalleModelo(
    id: number
  ): Observable<{ status: string; detalle: DetalleMoto }> {
    return this.http.get<{ status: string; detalle: DetalleMoto }>(
      `${this.apiBaseUrl}/modelo/${id}`
    );
  }

  /**
   * Obtiene todas las marcas con sus modelos disponibles
   */
  obtenerMarcasYModelos(): Observable<{
    status: string;
    marcas: MarcaConModelos[];
  }> {
    return this.http.get<{ status: string; marcas: MarcaConModelos[] }>(
      `${this.apiBaseUrl}/marcas-modelos`
    );
  }

  /**
   * Obtiene todos los tipos de motos disponibles
   */
  obtenerTiposMotos(): Observable<{ status: string; tipos: TipoMoto[] }> {
    return this.http.get<{ status: string; tipos: TipoMoto[] }>(
      `${this.apiBaseUrl}/tipos`
    );
  }

  /**
   * Establece los datos de comparación
   * @param datos Datos de la comparación
   */
  establecerDatosComparacion(datos: DatosComparacion): void {
    this.datosComparacion.set(datos);
  }

  /**
   * Limpia la selección actual de modelos y los datos de comparación
   */
  limpiarComparacion(): void {
    this.modelosSeleccionados.set([]);
    this.datosComparacion.set(null);
  }

  /**
   * Agrega un modelo a la comparación actual
   * @param modeloId ID del modelo a agregar
   */
  agregarModeloAComparacion(modeloId: number): void {
    // Solo permitimos hasta 3 modelos en la comparación
    if (this.modelosSeleccionados().length < 3) {
      // Verificamos que el modelo no esté ya en la selección
      if (!this.modelosSeleccionados().includes(modeloId)) {
        const nuevaSeleccion = [...this.modelosSeleccionados(), modeloId];
        this.modelosSeleccionados.set(nuevaSeleccion);

        // Si tenemos al menos un modelo seleccionado, actualizamos la comparación
        if (nuevaSeleccion.length > 0) {
          this.compararModelos(nuevaSeleccion).subscribe({
            next: (response) => this.establecerDatosComparacion(response.data),
            error: (error) =>
              console.error('Error al comparar modelos:', error),
          });
        }
      }
    }
  }

  /**
   * Elimina un modelo de la comparación actual
   * @param modeloId ID del modelo a eliminar
   */
  eliminarModeloDeComparacion(modeloId: number): void {
    const nuevaSeleccion = this.modelosSeleccionados().filter(
      (id) => id !== modeloId
    );
    this.modelosSeleccionados.set(nuevaSeleccion);

    // Si aún quedan modelos seleccionados, actualizamos la comparación
    if (nuevaSeleccion.length > 0) {
      this.compararModelos(nuevaSeleccion).subscribe({
        next: (response) => this.establecerDatosComparacion(response.data),
        error: (error) => console.error('Error al comparar modelos:', error),
      });
    } else {
      // Si no hay modelos seleccionados, limpiamos los datos de comparación
      this.datosComparacion.set(null);
    }
  }
}
