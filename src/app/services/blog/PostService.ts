import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../../models/Post.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = environment.postsUrl;

  constructor(private http: HttpClient) {}

  // Obtener todos los posts
  getPosts(): Observable<Post[]> {
    return this.http.get<{ data: Post[] }>(this.postsUrl).pipe(
      map((response) => response.data) // Asumiendo que el API devuelve un objeto con la clave 'data'
    );
  }

  // Obtener los detalles de un post por su ID
  getPost(id: number): Observable<Post> {
    return this.http.get<{ data: Post }>(`${this.postsUrl}/${id}`).pipe(
      map((response) => response.data) // Asumiendo que el API devuelve un objeto con la clave 'data'
    );
  }

  getPostsByCategory(categoryId: number): Observable<Post[]> {
    return this.http
      .get<{ data: Post[] }>(`${this.postsUrl}/category/${categoryId}`)
      .pipe(map((response) => response.data));
  }
}
