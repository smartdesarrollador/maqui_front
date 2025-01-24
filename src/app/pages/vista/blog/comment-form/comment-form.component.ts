import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../../services/blog/commentService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent implements OnInit {
  @Input() postId: number | undefined; // Recibir el ID del post desde el componente padre
  commentForm: FormGroup;
  comments: any[] = []; // Arreglo para almacenar los comentarios

  constructor(private fb: FormBuilder, private commentService: CommentService) {
    this.commentForm = this.fb.group({
      id_articulo: [1, Validators.required], // Asegúrate de enviar el ID correcto
      nombre_comentarista: [
        '',
        [Validators.required, Validators.maxLength(255)],
      ],
      contenido: ['', [Validators.required]],
      fecha_comentario: [
        new Date().toISOString().substring(0, 10),
        Validators.required,
      ], // Formato de fecha correcto
    });
  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    if (this.postId) {
      this.commentService.getCommentsByPostId(this.postId).subscribe((data) => {
        if (Array.isArray(data)) {
          this.comments = data;
        } else {
          console.error('Expected an array but got:', data);
          this.comments = []; // Evitar errores si no es un array
        }
      });
    }
  }

  submitComment(): void {
    if (this.commentForm.valid) {
      const newComment = this.commentForm.value;

      console.log(newComment); // Verificar los datos que se están enviando

      this.commentService.createComment(newComment).subscribe(
        () => {
          console.log('Comentario enviado correctamente.');
          this.onCommentCreated(); // Llamar al método que refresca los comentarios
        },
        (error) => {
          console.error('Error al enviar el comentario:', error);
        }
      );
    } else {
      console.error('El formulario no es válido.');
    }
  }

  // Método que refresca los comentarios
  onCommentCreated(): void {
    this.loadComments(); // Este método recarga los comentarios sin refrescar la página
  }
}
