import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryButtonsComponent } from './category-buttons/category-buttons.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CategoryButtonsComponent, PostListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {}
