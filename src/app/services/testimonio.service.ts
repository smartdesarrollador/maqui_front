import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Testimonio } from '../models/testimonio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestimonioService {
  selectCategory: Testimonio = new Testimonio();
  urlListar = environment.apiListarFilesTestimonio;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Testimonio> {
    return this.http.get(this.urlListar);
  }
}
