import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, Observer } from 'rxjs';
/* import { ToastrService } from 'ngx-toastr'; */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.css',
})
export class FormularioContactoComponent {
  FormContacto: any = FormGroup;
  UrlEmail: string = environment.apiUrlEmailContacto;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient /* private Toastr: ToastrService */
  ) {
    this.FormContacto = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }
  EnviarEmail() {
    if (this.FormContacto.valid) {
      var formData: any = new FormData();
      formData.append('nombre', this.FormContacto.get('nombre').value);
      formData.append('correo', this.FormContacto.get('correo').value);
      formData.append('telefono', this.FormContacto.get('telefono').value);
      formData.append('asunto', this.FormContacto.get('asunto').value);
      formData.append('mensaje', this.FormContacto.get('mensaje').value);
      this.http.post(this.UrlEmail, formData).subscribe(
        (response) => {
          console.log(response);
          /* this.Toastr.success('Email enviado Exitosamente'); */
          this.alerta();
          // Resetear el formulario después de enviar el correo electrónico
          this.FormContacto.reset();
        },
        (error) => {
          console.log(error);
          /* this.Toastr.error('No se pudo enviar el email'); */
        }
      );
    } else {
      // Aquí puedes mostrar un mensaje de error o realizar alguna acción adicional
      console.log('El formulario contiene campos inválidos.');
    }
  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
    });
  }
}
