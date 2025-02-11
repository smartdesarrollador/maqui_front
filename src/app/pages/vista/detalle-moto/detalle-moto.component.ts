import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MotosService } from '../../../services/services_motos/motos.service';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../../environments/environment';

interface Moto {
  id_moto: number;
  modelo_id: number;
  tipo_moto_id: number;
  anio: string;
  precio_base: string;
  color: string;
  stock: number;
  descripcion: string;
  imagen: string;
  cilindrada: string;
  motor: string;
  potencia: string;
  arranque: string;
  transmision: string;
  capacidad_tanque: string;
  peso_neto: number;
  carga_util: number;
  peso_bruto: number;
  largo: number;
  ancho: number;
  alto: number;
  neumatico_delantero: string;
  neumatico_posterior: string;
  freno_delantero: string;
  freno_posterior: string;
  cargador_usb: number;
  luz_led: number;
  alarma: number;
  cajuela: number;
  tablero_led: number;
  mp3: number;
  bluetooth: number;
  modelo: {
    id_modelo: number;
    marca_id: number;
    nombre: string;
    tipo: string;
    cilindrada: number;
    imagen: string;
    marca: {
      id_marca: number;
      nombre: string;
      origen: string;
      fundacion: string;
      logo: string;
    };
  };
  tipo_moto: {
    id_tipo_moto: number;
    nombre: string;
    descripcion: string;
  };
}

@Component({
  selector: 'app-detalle-moto',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './detalle-moto.component.html',
  styleUrl: './detalle-moto.component.css',
})
export class DetalleMotoComponent implements OnInit {
  protected readonly baseUrl = environment.urlRaiz;
  private readonly route = inject(ActivatedRoute);
  private readonly motosService = inject(MotosService);

  moto: Moto | null = null;
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    // Obtener el ID de la ruta
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadMotoDetails(+id);
      }
    });
  }

  private loadMotoDetails(id: number): void {
    this.isLoading = true;
    this.motosService.getMotoById(id).subscribe({
      next: (response) => {
        this.moto = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los detalles de la moto';
        this.isLoading = false;
        console.error('Error:', error);
      },
    });
  }

  // Método para verificar si una característica está disponible
  hasFeature(feature: number): boolean {
    return feature === 1;
  }
}
