import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TipoMoto {
  id_tipo_moto: number;
  nombre: string;
  descripcion: string;
  motos_count: number;
}

export interface MotoResponse {
  status: string;
  data: {
    data: Moto[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
  message: string;
}

export interface TipoMotoResponse {
  status: string;
  data: TipoMoto[];
  message: string;
}

export interface Moto {
  id_moto: number;
  modelo: {
    nombre: string;
    marca: {
      nombre: string;
    };
  };
  tipo_moto: {
    nombre: string;
  };
  descripcion: string;
  cilindrada: string;
  motor: string;
  precio_base: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class MotosPorServicioService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/motos-por-tipo`;

  /**
   * Obtiene la lista de motos con filtros, búsqueda y paginación
   */
  getMotos(params: {
    tipo?: string;
    search?: string;
    page?: number;
    per_page?: number;
    sort_by?: string;
    sort_order?: 'asc' | 'desc';
  }): Observable<MotoResponse> {
    let httpParams = new HttpParams();

    // Agregar parámetros si existen
    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }
    if (params.page) {
      httpParams = httpParams.set('page', params.page.toString());
    }
    if (params.per_page) {
      httpParams = httpParams.set('per_page', params.per_page.toString());
    }
    if (params.sort_by) {
      httpParams = httpParams.set('sort_by', params.sort_by);
    }
    if (params.sort_order) {
      httpParams = httpParams.set('sort_order', params.sort_order);
    }

    // Si hay tipo, usar la URL con tipo, sino usar la URL base
    const url = params.tipo ? `${this.baseUrl}/${params.tipo}` : this.baseUrl;

    return this.http.get<MotoResponse>(url, { params: httpParams });
  }

  /**
   * Obtiene la lista de tipos de moto disponibles
   */
  getTiposMotos(): Observable<TipoMotoResponse> {
    return this.http.get<TipoMotoResponse>(`${this.baseUrl}/tipos`);
  }
}
