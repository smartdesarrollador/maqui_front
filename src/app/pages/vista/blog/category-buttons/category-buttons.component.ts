import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../../models/Category.model';
import { CategoryService } from '../../../../services/blog/CategoryService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-buttons.component.html',
  styleUrl: './category-buttons.component.css',
})
export class CategoryButtonsComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener las categorías desde el servicio
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // Redirigir al hacer clic en una categoría
  navigateToCategory(id: number): void {
    this.router.navigate(['/blog/post/categorie', id]);
  }
}
