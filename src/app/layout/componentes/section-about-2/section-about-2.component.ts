import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioFileService } from '../../../services/medios/medio-file.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section-about-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-about-2.component.html',
  styleUrl: './section-about-2.component.css',
})
export class SectionAbout2Component implements OnInit {
  protected readonly medioFileService = inject(MedioFileService);
  protected readonly baseUrl = environment.urlRaiz;

  imagen: any = null;
  cargando = true;
  error = '';

  ngOnInit(): void {
    // ID de la imagen que queremos mostrar
    const imagenId = 2; // Ajusta este ID según tu necesidad

    this.medioFileService.obtenerArchivo(imagenId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.imagen = response.data;
        }
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar la imagen:', error);
        this.error = 'Error al cargar la imagen';
        this.cargando = false;
      },
    });
  }
}
