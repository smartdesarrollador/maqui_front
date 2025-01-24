import { Post } from './Post.model';

export interface Comment {
  id: number;
  nombre_comentarista: string;
  contenido: string;
  fecha_comentario: Date;
  post?: Post; // Relación opcional con el post
  created_at: Date;
  updated_at: Date;
}
