import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Tabla1 } from './tabla1';

@Injectable({
  providedIn: 'root',
})
export class Tabla1Service {
  private apiUrl = `${environment.apiBaseUrl}${environment.endpoints.tabla1}`;
  private categoriasConRegistrosUrl = `${environment.apiBaseUrl}/categorias-con-registros`; // URL para obtener categorías con registros

  constructor(private http: HttpClient) {}

  getTablaByCategoria(categoriaId: number): Observable<Tabla1[]> {
    return this.http
      .get<{ data: Tabla1[] }>(`${this.apiUrl}?categoria1_id=${categoriaId}`)
      .pipe(map((response) => response.data));
  }

  getTablaById(id: number): Observable<Tabla1> {
    return this.http
      .get<{ data: Tabla1 }>(`${this.apiUrl}/${id}`)
      .pipe(map((response) => response.data));
  }

  getCategoriasConRegistros(): Observable<any[]> {
    // No es necesario hacer map ya que no hay un 'data' en la respuesta
    return this.http.get<any[]>(this.categoriasConRegistrosUrl);
  }
}
