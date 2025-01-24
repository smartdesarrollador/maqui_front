import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Importar DomSanitizer

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private sanitizer: DomSanitizer // Inyectar el servicio DomSanitizer
  ) {}

  ngOnInit(): void {
    // Obtener los posts desde el servicio
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // Redirigir al detalle del post
  goToPostDetail(id: number): void {
    this.router.navigate(['/blog/posts/detail/', id]);
  }

  // Función para limitar el contenido y sanitizarlo
  getLimitedContent(content: string, limit: number): SafeHtml {
    // Limitar el contenido a 'limit' caracteres y agregar puntos suspensivos
    const limitedContent =
      content.length > limit ? content.slice(0, limit) + '...' : content;
    // Sanitizar el contenido antes de insertarlo en el DOM
    return this.sanitizer.bypassSecurityTrustHtml(limitedContent);
  }
}
