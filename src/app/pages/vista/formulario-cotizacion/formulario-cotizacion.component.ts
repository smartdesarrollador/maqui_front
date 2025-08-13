import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormularioCotizacionService } from '../../../services/services_motos/formulario-cotizacion.service';
import { MotosService } from '../../../services/services_motos/motos.service';

@Component({
  selector: 'app-formulario-cotizacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cotizacion.component.html',
  styleUrl: './formulario-cotizacion.component.css',
})
export class FormularioCotizacionComponent {
  private readonly fb = inject(FormBuilder);
  private readonly cotizacionService = inject(FormularioCotizacionService);
  private readonly motosService = inject(MotosService);

  formularioCotizacion: FormGroup;
  enviando = false;
  mensajeExito = '';
  mensajeError = '';

  // Datos dinámicos
  tiposMotos: any[] = [];
  modelos: any[] = [];
  modelosFiltrados: any[] = [];

  opcionesTiempo = [
    'En una semana',
    'El próximo mes',
    'Aún no lo defino',
    'En un año',
  ];

  constructor() {
    this.formularioCotizacion = this.fb.group({
      tipo_moto: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      correo_electronico: ['', [Validators.required, Validators.email]],
      tipo_documento: ['DNI'],
      numero_documento: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{8}$/)],
      ],
      departamento: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      distrito: ['', [Validators.required]],
      tiempo_compra: ['', [Validators.required]],
    });

    // Cargar datos iniciales
    this.cargarTiposMotos();
    this.cargarModelos();

    // Configurar listener para cambios en tipo de moto
    this.formularioCotizacion.get('tipo_moto')?.valueChanges.subscribe(tipoMotoId => {
      if (this.tiposMotos.length > 0 && this.modelos.length > 0) {
        this.filtrarModelosPorTipo(tipoMotoId);
        // Limpiar modelo seleccionado cuando cambie el tipo
        this.formularioCotizacion.get('modelo')?.setValue('');
      }
    });
  }

  /**
   * Carga los tipos de motos desde el servicio
   */
  private cargarTiposMotos(): void {
    this.motosService.getTipoMotos().subscribe({
      next: (tipos) => {
        this.tiposMotos = tipos || [];
      },
      error: (error) => {
        console.error('Error al cargar tipos de motos:', error);
        this.tiposMotos = [];
      }
    });
  }

  /**
   * Carga todos los modelos desde el servicio
   */
  private cargarModelos(): void {
    this.motosService.getModelos().subscribe({
      next: (modelos) => {
        this.modelos = modelos || [];
        this.modelosFiltrados = modelos || [];
      },
      error: (error) => {
        console.error('Error al cargar modelos:', error);
        this.modelos = [];
        this.modelosFiltrados = [];
      }
    });
  }

  /**
   * Filtra los modelos según el tipo de moto seleccionado
   */
  private filtrarModelosPorTipo(tipoMotoId: string): void {
    if (!tipoMotoId) {
      this.modelosFiltrados = this.modelos;
      return;
    }

    // Convertir el ID del tipo a número
    const tipoMotoIdNumber = parseInt(tipoMotoId, 10);
    if (isNaN(tipoMotoIdNumber)) {
      this.modelosFiltrados = [];
      return;
    }

    // Filtrar modelos por el ID del tipo seleccionado
    this.modelosFiltrados = this.modelos.filter(modelo => 
      modelo && modelo.tipo_moto_id === tipoMotoIdNumber
    );
  }

  /**
   * Maneja el envío del formulario
   */
  async onSubmit(): Promise<void> {
    if (this.formularioCotizacion.invalid) {
      Object.keys(this.formularioCotizacion.controls).forEach((key) => {
        const control = this.formularioCotizacion.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    try {
      const response = await this.cotizacionService
        .guardarCotizacion(this.formularioCotizacion.value)
        .toPromise();

      if (response?.status === 'success') {
        this.mensajeExito = 'Cotización enviada exitosamente';
        this.formularioCotizacion.reset();
      } else {
        this.mensajeError = 'Error al enviar la cotización';
      }
    } catch (error) {
      this.mensajeError = 'Error al procesar la solicitud';
      console.error('Error:', error);
    } finally {
      this.enviando = false;
    }
  }

  /**
   * Verifica si un campo es inválido y ha sido tocado
   */
  esCampoInvalido(campo: string): boolean {
    const control = this.formularioCotizacion.get(campo);
    return !!(control?.invalid && (control?.touched || control?.dirty));
  }

  /**
   * Obtiene el mensaje de error para un campo
   */
  obtenerMensajeError(campo: string): string {
    const control = this.formularioCotizacion.get(campo);

    if (!control?.errors) return '';

    const errors = control.errors;

    if (errors['required']) return 'Este campo es requerido';
    if (errors['email']) return 'Ingrese un correo electrónico válido';
    if (errors['pattern']) {
      if (campo === 'celular') return 'El celular debe tener 9 dígitos';
      if (campo === 'numero_documento') return 'El DNI debe tener 8 dígitos';
    }
    if (errors['minlength'])
      return `Mínimo ${errors['minlength'].requiredLength} caracteres`;

    return 'Campo inválido';
  }
}
