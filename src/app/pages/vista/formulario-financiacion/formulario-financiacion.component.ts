import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanciacionService } from '../../../services/services_motos/financiacion.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-financiacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-financiacion.component.html',
  styleUrl: './formulario-financiacion.component.css',
})
export class FormularioFinanciacionComponent implements OnInit {
  financiacionForm: FormGroup;
  tiposMotos: any[] = [];
  modelos: any[] = [];
  cargandoModelos = false;

  constructor(
    private fb: FormBuilder,
    private financiacionService: FinanciacionService
  ) {
    this.financiacionForm = this.fb.group({
      tipo_moto_id: ['', Validators.required],
      modelo_id: ['', Validators.required],
      situacion_laboral: ['', Validators.required],
      ingreso_mensual: ['', [Validators.required, Validators.min(0)]],
      cuota_inicial: ['', [Validators.required, Validators.min(0)]],
      plazo: ['', [Validators.required, Validators.min(6), Validators.max(48)]],
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      tipo_documento: ['DNI', Validators.required],
      numero_documento: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{8}$')],
      ],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarTiposMotos();

    // Escuchar cambios en el tipo de moto
    this.financiacionForm
      .get('tipo_moto_id')
      ?.valueChanges.subscribe((tipoId) => {
        if (tipoId) {
          this.cargarModelos(tipoId);
        } else {
          this.modelos = [];
        }
        this.financiacionForm.patchValue({ modelo_id: '' });
      });
  }

  cargarTiposMotos() {
    this.financiacionService.getTipoMotos().subscribe({
      next: (tipos) => (this.tiposMotos = tipos),
      error: (error) => console.error('Error al cargar tipos de motos:', error),
    });
  }

  cargarModelos(tipoId: number) {
    this.cargandoModelos = true;
    this.financiacionService.getModelosPorTipo(tipoId).subscribe({
      next: (modelos) => {
        this.modelos = modelos;
        this.cargandoModelos = false;
      },
      error: (error) => {
        console.error('Error al cargar modelos:', error);
        this.cargandoModelos = false;
      },
    });
  }

  onSubmit() {
    if (this.financiacionForm.valid) {
      this.financiacionService
        .solicitarFinanciamiento(this.financiacionForm.value)
        .subscribe({
          next: (response) => {
            console.log('Financiamiento solicitado con éxito', response);
            // Aquí puedes agregar lógica adicional después del éxito
          },
          error: (error) => {
            console.error('Error al solicitar financiamiento:', error);
          },
        });
    }
  }
}
