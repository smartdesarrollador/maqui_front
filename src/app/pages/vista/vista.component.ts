import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarBasicoComponent } from '../../layout/componentes/navbar-basico/navbar-basico.component';
import { DropdownBasicoComponent } from '../../layout/componentes/dropdown-basico/dropdown-basico.component';
import { ModalBasicoComponent } from '../../layout/componentes/modal-basico/modal-basico.component';
import { NavbarDropdownComponent } from '../../layout/componentes/navbar-dropdown/navbar-dropdown.component';
import { CarouselComponent } from '../../layout/componentes/carousel/carousel.component';
import { Card1Component } from '../../layout/componentes/card-1/card-1.component';
import { Footer1Component } from '../../layout/componentes/footer-1/footer-1.component';
import { PostCardComponent } from '../../layout/componentes/post-card/post-card.component';
import { Post1Component } from '../../layout/componentes/post-1/post-1.component';
import { Post2Component } from '../../layout/componentes/post-2/post-2.component';
import { PostGridComponent } from '../../layout/componentes/post-grid/post-grid.component';
import { Galeria1Component } from '../../layout/componentes/galeria-1/galeria-1.component';
import { Header1Component } from '../../layout/componentes/header-1/header-1.component';
import { Jumbotron1Component } from '../../layout/componentes/jumbotron-1/jumbotron-1.component';
import { Subscribe1Component } from '../../layout/componentes/subscribe-1/subscribe-1.component';
import { CarouselOwl1Component } from '../../layout/componentes/carousel-owl-1/carousel-owl-1.component';
import { BotonWhatsappComponent } from '../../layout/componentes/boton-whatsapp/boton-whatsapp.component';
import { NavbarStickyComponent } from '../../layout/componentes/navbar-sticky/navbar-sticky.component';
import { FooterSimpleComponent } from '../../layout/componentes/footer-simple/footer-simple.component';

/* import * as AOS from 'aos'; */

@Component({
  selector: 'app-vista',
  standalone: true,
  imports: [
    RouterOutlet,
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
    Header1Component,
    Jumbotron1Component,
    Subscribe1Component,
    CarouselOwl1Component,
    BotonWhatsappComponent,
    NavbarStickyComponent,
    FooterSimpleComponent,
  ],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css',
})
export class VistaComponent implements OnInit {
  ngOnInit(): void {
    /* AOS.init(); */
  }
}
