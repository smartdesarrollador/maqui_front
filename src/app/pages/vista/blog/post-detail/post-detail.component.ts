import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, CommentFormComponent, RouterLink, QuillModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  post: Post | undefined;
  postId: number;
  safeHtml: SafeHtml | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private sanitizer: DomSanitizer
  ) {
    // Obtener el ID del post desde la URL
    this.postId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    // Llamar al servicio para obtener el detalle del post
    this.postService.getPost(this.postId).subscribe((data) => {
      this.post = data;
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
        this.post.contenido
      );
      console.log(data);
    });
  }
}
