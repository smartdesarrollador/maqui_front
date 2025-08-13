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

  // Datos geográficos de Perú
  departamentos = [
    { codigo: '01', nombre: 'Amazonas' },
    { codigo: '02', nombre: 'Áncash' },
    { codigo: '03', nombre: 'Apurímac' },
    { codigo: '04', nombre: 'Arequipa' },
    { codigo: '05', nombre: 'Ayacucho' },
    { codigo: '06', nombre: 'Cajamarca' },
    { codigo: '07', nombre: 'Callao' },
    { codigo: '08', nombre: 'Cusco' },
    { codigo: '09', nombre: 'Huancavelica' },
    { codigo: '10', nombre: 'Huánuco' },
    { codigo: '11', nombre: 'Ica' },
    { codigo: '12', nombre: 'Junín' },
    { codigo: '13', nombre: 'La Libertad' },
    { codigo: '14', nombre: 'Lambayeque' },
    { codigo: '15', nombre: 'Lima' },
    { codigo: '16', nombre: 'Loreto' },
    { codigo: '17', nombre: 'Madre de Dios' },
    { codigo: '18', nombre: 'Moquegua' },
    { codigo: '19', nombre: 'Pasco' },
    { codigo: '20', nombre: 'Piura' },
    { codigo: '21', nombre: 'Puno' },
    { codigo: '22', nombre: 'San Martín' },
    { codigo: '23', nombre: 'Tacna' },
    { codigo: '24', nombre: 'Tumbes' },
    { codigo: '25', nombre: 'Ucayali' }
  ];

  provincias: any[] = [];
  provinciasFiltradas: any[] = [];
  distritos: any[] = [];
  distritosFiltrados: any[] = [];

  // Mapa de provincias por departamento (algunos ejemplos principales)
  provinciasPorDepartamento: { [key: string]: any[] } = {
    '15': [ // Lima
      { codigo: '1501', nombre: 'Lima' },
      { codigo: '1502', nombre: 'Barranca' },
      { codigo: '1503', nombre: 'Cajatambo' },
      { codigo: '1504', nombre: 'Canta' },
      { codigo: '1505', nombre: 'Cañete' },
      { codigo: '1506', nombre: 'Huaral' },
      { codigo: '1507', nombre: 'Huarochirí' },
      { codigo: '1508', nombre: 'Huaura' },
      { codigo: '1509', nombre: 'Oyón' },
      { codigo: '1510', nombre: 'Yauyos' }
    ],
    '04': [ // Arequipa
      { codigo: '0401', nombre: 'Arequipa' },
      { codigo: '0402', nombre: 'Camaná' },
      { codigo: '0403', nombre: 'Caravelí' },
      { codigo: '0404', nombre: 'Castilla' },
      { codigo: '0405', nombre: 'Caylloma' },
      { codigo: '0406', nombre: 'Condesuyos' },
      { codigo: '0407', nombre: 'Islay' },
      { codigo: '0408', nombre: 'La Unión' }
    ],
    '13': [ // La Libertad
      { codigo: '1301', nombre: 'Trujillo' },
      { codigo: '1302', nombre: 'Ascope' },
      { codigo: '1303', nombre: 'Bolívar' },
      { codigo: '1304', nombre: 'Chepén' },
      { codigo: '1305', nombre: 'Julcán' },
      { codigo: '1306', nombre: 'Otuzco' },
      { codigo: '1307', nombre: 'Pacasmayo' },
      { codigo: '1308', nombre: 'Pataz' },
      { codigo: '1309', nombre: 'Sánchez Carrión' },
      { codigo: '1310', nombre: 'Santiago de Chuco' },
      { codigo: '1311', nombre: 'Gran Chimú' },
      { codigo: '1312', nombre: 'Virú' }
    ]
  };

  // Mapa de distritos por provincia (algunos ejemplos de Lima)
  distritosPorProvincia: { [key: string]: any[] } = {
    '1501': [ // Lima Metropolitana
      { codigo: '150101', nombre: 'Lima' },
      { codigo: '150102', nombre: 'Ancón' },
      { codigo: '150103', nombre: 'Ate' },
      { codigo: '150104', nombre: 'Barranco' },
      { codigo: '150105', nombre: 'Breña' },
      { codigo: '150106', nombre: 'Carabayllo' },
      { codigo: '150107', nombre: 'Chaclacayo' },
      { codigo: '150108', nombre: 'Chorrillos' },
      { codigo: '150109', nombre: 'Cieneguilla' },
      { codigo: '150110', nombre: 'Comas' },
      { codigo: '150111', nombre: 'El Agustino' },
      { codigo: '150112', nombre: 'Independencia' },
      { codigo: '150113', nombre: 'Jesús María' },
      { codigo: '150114', nombre: 'La Molina' },
      { codigo: '150115', nombre: 'La Victoria' },
      { codigo: '150116', nombre: 'Lince' },
      { codigo: '150117', nombre: 'Los Olivos' },
      { codigo: '150118', nombre: 'Lurigancho' },
      { codigo: '150119', nombre: 'Lurin' },
      { codigo: '150120', nombre: 'Magdalena del Mar' },
      { codigo: '150121', nombre: 'Pueblo Libre' },
      { codigo: '150122', nombre: 'Miraflores' },
      { codigo: '150123', nombre: 'Pachacámac' },
      { codigo: '150124', nombre: 'Pucusana' },
      { codigo: '150125', nombre: 'Puente Piedra' },
      { codigo: '150126', nombre: 'Punta Hermosa' },
      { codigo: '150127', nombre: 'Punta Negra' },
      { codigo: '150128', nombre: 'Rímac' },
      { codigo: '150129', nombre: 'San Bartolo' },
      { codigo: '150130', nombre: 'San Borja' },
      { codigo: '150131', nombre: 'San Isidro' },
      { codigo: '150132', nombre: 'San Juan de Lurigancho' },
      { codigo: '150133', nombre: 'San Juan de Miraflores' },
      { codigo: '150134', nombre: 'San Luis' },
      { codigo: '150135', nombre: 'San Martín de Porres' },
      { codigo: '150136', nombre: 'San Miguel' },
      { codigo: '150137', nombre: 'Santa Anita' },
      { codigo: '150138', nombre: 'Santa María del Mar' },
      { codigo: '150139', nombre: 'Santa Rosa' },
      { codigo: '150140', nombre: 'Santiago de Surco' },
      { codigo: '150141', nombre: 'Surquillo' },
      { codigo: '150142', nombre: 'Villa El Salvador' },
      { codigo: '150143', nombre: 'Villa María del Triunfo' }
    ]
  };

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

    // Configurar listener para cambios en departamento
    this.formularioCotizacion.get('departamento')?.valueChanges.subscribe(departamentoCodigo => {
      this.filtrarProvinciasPorDepartamento(departamentoCodigo);
      // Limpiar provincia y distrito cuando cambie el departamento
      this.formularioCotizacion.get('provincia')?.setValue('');
      this.formularioCotizacion.get('distrito')?.setValue('');
    });

    // Configurar listener para cambios en provincia
    this.formularioCotizacion.get('provincia')?.valueChanges.subscribe(provinciaCodigo => {
      this.filtrarDistritosPorProvincia(provinciaCodigo);
      // Limpiar distrito cuando cambie la provincia
      this.formularioCotizacion.get('distrito')?.setValue('');
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
   * Filtra las provincias según el departamento seleccionado
   */
  private filtrarProvinciasPorDepartamento(departamentoCodigo: string): void {
    if (!departamentoCodigo) {
      this.provinciasFiltradas = [];
      return;
    }

    this.provinciasFiltradas = this.provinciasPorDepartamento[departamentoCodigo] || [];
    this.distritosFiltrados = [];
  }

  /**
   * Filtra los distritos según la provincia seleccionada
   */
  private filtrarDistritosPorProvincia(provinciaCodigo: string): void {
    if (!provinciaCodigo) {
      this.distritosFiltrados = [];
      return;
    }

    this.distritosFiltrados = this.distritosPorProvincia[provinciaCodigo] || [];
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
      // Preparar los datos para envío - convertir códigos a nombres
      const formData = { ...this.formularioCotizacion.value };
      
      // Convertir código de departamento a nombre
      if (formData.departamento) {
        const departamento = this.departamentos.find(d => d.codigo === formData.departamento);
        formData.departamento = departamento?.nombre || formData.departamento;
      }
      
      // Convertir código de provincia a nombre
      if (formData.provincia) {
        const provincia = this.provinciasFiltradas.find(p => p.codigo === formData.provincia);
        formData.provincia = provincia?.nombre || formData.provincia;
      }
      
      // Convertir código de distrito a nombre
      if (formData.distrito) {
        const distrito = this.distritosFiltrados.find(d => d.codigo === formData.distrito);
        formData.distrito = distrito?.nombre || formData.distrito;
      }
      
      // Convertir ID de tipo de moto a nombre
      if (formData.tipo_moto) {
        const tipoMoto = this.tiposMotos.find(t => t.id_tipo_moto.toString() === formData.tipo_moto);
        formData.tipo_moto = tipoMoto?.nombre || formData.tipo_moto;
      }
      
      // Convertir ID de modelo a nombre
      if (formData.modelo) {
        const modelo = this.modelosFiltrados.find(m => m.id_modelo.toString() === formData.modelo);
        formData.modelo = modelo?.nombre || formData.modelo;
      }

      const response = await this.cotizacionService
        .guardarCotizacion(formData)
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
