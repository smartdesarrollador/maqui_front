import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-especialidad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-especialidad.component.html',
  styleUrl: './card-especialidad.component.css',
})
export class CardEspecialidadComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getEspecialidades().subscribe((data: {}) => {
      console.log(data);
      this.listBanners = data;
    });
  }

  onDetail(dataProducto: Producto) {
    console.log(dataProducto);
    this.dataService.selectCategory = Object.assign({}, dataProducto);
    this.router.navigate(['/detalle'], {
      queryParams: { Id: dataProducto.id_producto },
    });
  }
}
