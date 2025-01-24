export interface User {
  id: number;
  nombre: string;
  email: string;
  rol: 'administrador' | 'autor';
  created_at: Date;
  updated_at: Date;
}
