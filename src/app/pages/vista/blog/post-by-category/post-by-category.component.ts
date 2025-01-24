import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';
import { environment } from '../../../../../environments/environment';
import { Category } from '../../../../models/Category.model';
import { CategoryService } from '../../../../services/blog/CategoryService';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Importar DomSanitizer

@Component({
  selector: 'app-post-by-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-by-category.component.html',
  styleUrl: './post-by-category.component.css',
})
export class PostByCategoryComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  posts: Post[] = [];
  categoryId: number;
  categoryName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router,
    private sanitizer: DomSanitizer // Inyectar DomSanitizer
  ) {
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.postService.getPostsByCategory(this.categoryId).subscribe((data) => {
      this.posts = data;
    });
    this.getCategoryName(this.categoryId);
  }

  getCategoryName(id: number): void {
    this.categoryService.getCategoryById(id).subscribe((category: Category) => {
      this.categoryName = category.nombre;
    });
  }

  // Método para sanitizar y limitar el contenido del post
  getSanitizedContent(content: string, limit: number): SafeHtml {
    const truncatedContent = content.slice(0, limit); // Cortar el contenido
    return this.sanitizer.bypassSecurityTrustHtml(truncatedContent + '...'); // Sanitizar el contenido para que sea seguro
  }

  goToPostDetail(id: number): void {
    this.router.navigate(['/blog/posts/detail/', id]);
  }
}
