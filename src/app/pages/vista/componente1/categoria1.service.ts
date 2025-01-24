import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Categoria1 } from './categoria1';

@Injectable({
  providedIn: 'root',
})
export class Categoria1Service {
  private apiUrl = `${environment.apiBaseUrl}${environment.endpoints.categoria1}`;
  private categoriasConRegistrosUrl = `${environment.apiBaseUrl}/categorias-con-registros`;

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria1[]> {
    return this.http
      .get<{ data: Categoria1[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }

  // Nuevo método para obtener categorías con sus registros relacionados
  getCategoriasConRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriasConRegistrosUrl);
  }
}
