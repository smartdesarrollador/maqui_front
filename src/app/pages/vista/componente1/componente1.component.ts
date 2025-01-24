import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria1Service } from './categoria1.service';
import { Categoria1 } from './categoria1';
import { environment } from '../../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [CommonModule, QuillModule, RouterLink],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css',
})
export class Componente1Component implements OnInit {
  dominio = environment.dominio;
  categorias: any[] = [];
  selectedRecord: any | null = null;
  safeHtml: SafeHtml | null = null;

  constructor(
    private categoriaService: Categoria1Service,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getCategoriasConRegistros();
  }

  getCategoriasConRegistros(): void {
    this.categoriaService.getCategoriasConRegistros().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (err) =>
        console.error('Error fetching categories with records', err),
    });
  }

  selectRecord(record: any): void {
    this.selectedRecord = record;
    // Sanitizar el contenido HTML del campo text1, si existe
    this.safeHtml = record.text1
      ? this.sanitizer.bypassSecurityTrustHtml(record.text1)
      : '';
  }

  closeModal(): void {
    this.selectedRecord = null;
    this.safeHtml = null;
  }
}
