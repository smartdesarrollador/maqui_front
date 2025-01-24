import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-ver-curso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    QuillModule,
  ],
  templateUrl: './ver-curso.component.html',
  styleUrl: './ver-curso.component.css',
})
export class VerCursoComponent implements OnInit {
  safeHtml: SafeHtml | null = null;
  listCursos: any = [];
  valor_id_producto: any;
  urlRaiz = environment.urlRaiz + '/';

  constructor(
    private dataService: ProductoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    /* this.listCursos = this.dataService.selectCategory; */
  }

  ngOnInit(): void {
    /*  this.loadCategories(); */

    this.route.queryParams.subscribe((params) => {
      const categoryId = params['Id'];

      console.log(categoryId);
      this.loadCategories(categoryId);
    });
  }

  loadCategories(categoryId: any) {
    return this.dataService.getCursoById(categoryId).subscribe((data: {}) => {
      console.log(data);
      this.listCursos = data;
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
        this.listCursos.descripcion
      );
    });
  }
}
