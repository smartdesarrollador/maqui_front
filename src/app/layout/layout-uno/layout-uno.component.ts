import { Component, OnInit } from '@angular/core';

import { NavbarBasicoComponent } from '../componentes/navbar-basico/navbar-basico.component';
import { DropdownBasicoComponent } from '../componentes/dropdown-basico/dropdown-basico.component';
import { ModalBasicoComponent } from '../componentes/modal-basico/modal-basico.component';
import { NavbarDropdownComponent } from '../componentes/navbar-dropdown/navbar-dropdown.component';
import { CarouselComponent } from '../componentes/carousel/carousel.component';
import { Card1Component } from '../componentes/card-1/card-1.component';
import { Footer1Component } from '../componentes/footer-1/footer-1.component';
import { PostCardComponent } from '../componentes/post-card/post-card.component';
import { Post1Component } from '../componentes/post-1/post-1.component';
import { Post2Component } from '../componentes/post-2/post-2.component';
import { PostGridComponent } from '../componentes/post-grid/post-grid.component';
import { Galeria1Component } from '../componentes/galeria-1/galeria-1.component';
import { CarouselOwl1Component } from '../componentes/carousel-owl-1/carousel-owl-1.component';
import { CarouselOwl2Component } from '../componentes/carousel-owl-2/carousel-owl-2.component';
import { Parallax1Component } from '../componentes/parallax-1/parallax-1.component';
import { BackgroundAnimatedComponent } from '../componentes/background-animated/background-animated.component';
import { Jumbotron1Component } from '../componentes/jumbotron-1/jumbotron-1.component';
import { CardInfoComponent } from '../componentes/card-info/card-info.component';
import { Services1Component } from '../componentes/services-1/services-1.component';

@Component({
  selector: 'app-layout-uno',
  standalone: true,
  imports: [
    NavbarBasicoComponent,
    DropdownBasicoComponent,
    ModalBasicoComponent,
    NavbarDropdownComponent,
    CarouselComponent,
    Card1Component,
    Footer1Component,
    PostCardComponent,
    Post1Component,
    Post2Component,
    PostGridComponent,
    Galeria1Component,
    CarouselOwl1Component,
    CarouselOwl2Component,
    Parallax1Component,
    BackgroundAnimatedComponent,
    Jumbotron1Component,
    CardInfoComponent,
    Services1Component,
  ],
  templateUrl: './layout-uno.component.html',
  styleUrl: './layout-uno.component.css',
})
export class LayoutUnoComponent implements OnInit {
  ngOnInit(): void {}
}
