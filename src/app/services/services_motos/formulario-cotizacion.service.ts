import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Interfaces para el tipado
interface CotizacionRequest {
  tipo_moto: string;
  modelo: string;
  nombres: string;
  apellidos: string;
  celular: string;
  correo_electronico: string;
  tipo_documento: 'DNI';
  numero_documento: string;
  departamento: string;
  provincia: string;
  distrito: string;
  tiempo_compra:
    | 'En una semana'
    | 'El próximo mes'
    | 'Aún no lo defino'
    | 'En un año';
}

interface CotizacionResponse {
  status: 'success' | 'error';
  message: string;
  data?: {
    cotizacion_id: number;
    cliente: {
      id_cliente: number;
      nombre: string;
      apellido: string;
      email: string;
      telefono: string;
      tipo_documento: string;
      numero_documento: string;
      departamento: string;
      provincia: string;
      distrito: string;
    };
    moto: {
      id_moto: number;
      modelo_id: number;
      precio_base: number;
      // ... otros campos de moto
    };
  };
  errors?: Record<string, string[]>;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormularioCotizacionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/cotizaciones`;

  /**
   * Envía los datos del formulario de cotización al servidor
   * @param formData Datos del formulario de cotización
   * @returns Observable con la respuesta del servidor
   */
  guardarCotizacion(
    formData: CotizacionRequest
  ): Observable<CotizacionResponse> {
    return this.http.post<CotizacionResponse>(this.apiUrl, formData);
  }

  /**
   * Valida el formato del correo electrónico
   * @param email Correo electrónico a validar
   * @returns boolean indicando si el formato es válido
   */
  validarEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }

  /**
   * Valida el formato del número de teléfono
   * @param telefono Número de teléfono a validar
   * @returns boolean indicando si el formato es válido
   */
  validarTelefono(telefono: string): boolean {
    const telefonoRegex = /^[0-9]{9}$/;
    return telefonoRegex.test(telefono);
  }

  /**
   * Valida el formato del número de documento DNI
   * @param dni Número de DNI a validar
   * @returns boolean indicando si el formato es válido
   */
  validarDNI(dni: string): boolean {
    const dniRegex = /^[0-9]{8}$/;
    return dniRegex.test(dni);
  }
}
