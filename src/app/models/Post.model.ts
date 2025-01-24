import { Category } from './Category.model';
import { Tag } from './Tag.model';
import { Comment } from './Comment.model';
import { User } from './User.model';

export interface Post {
  id: number;
  titulo: string;
  contenido: string;
  estado: 'publicado' | 'borrador';
  fecha_publicacion: Date | null;
  ruta_imagen?: string; // Ruta de la imagen del post
  imagen?: string; // Nombre de la imagen
  autor: User; // Relación con el autor
  categorias: Category[]; // Relación con las categorías
  tags: Tag[]; // Relación con las etiquetas
  comentarios: Comment[]; // Relación con los comentarios
  created_at: Date;
  updated_at: Date;
}
