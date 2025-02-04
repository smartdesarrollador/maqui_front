import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Interfaces para tipar la respuesta
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

@Injectable({
  providedIn: 'root',
})
export class MenuMotoService {
  private readonly apiUrl = `${environment.apiBaseUrl}/menu-motos`;
  private readonly http = inject(HttpClient);

  /**
   * Obtiene el menú de motos agrupado por tipos
   * @returns Observable con array de tipos de moto y sus motos asociadas
   */
  getMenuMotos(): Observable<TipoMoto[]> {
    return this.http.get<TipoMoto[]>(this.apiUrl);
  }
}
