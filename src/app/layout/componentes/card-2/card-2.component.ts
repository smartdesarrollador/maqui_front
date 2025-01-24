import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-2.component.html',
  styleUrl: './card-2.component.css',
})
export class Card2Component implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getDestacados().subscribe((data: {}) => {
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
