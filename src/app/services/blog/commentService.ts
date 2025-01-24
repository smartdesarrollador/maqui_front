import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importación de map
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentsUrl = environment.commentsUrl;

  constructor(private http: HttpClient) {}

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http
      .get<{ data: Comment[] }>(`${this.commentsUrl}?post_id=${postId}`)
      .pipe(
        map((response: { data: Comment[] }) => response.data) // Definir el tipo explícitamente
      );
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(this.commentsUrl, comment);
  }
}
