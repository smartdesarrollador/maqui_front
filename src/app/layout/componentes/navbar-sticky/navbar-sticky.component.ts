import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-sticky',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-sticky.component.html',
  styleUrls: ['./navbar-sticky.component.css'],
})
export class NavbarStickyComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((flowbite) => {
        // Código para inicializar flowbite
      });

      // Agregar listener al evento scroll
      window.addEventListener('scroll', this.onWindowScroll);
    }
  }

  // Método para manejar el scroll
  onWindowScroll = (): void => {
    const topBarHeight = document.getElementById('top-bar')?.offsetHeight || 0;
    const navbar = document.getElementById('navbar');

    if (navbar) {
      if (window.pageYOffset > topBarHeight) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    }
  };
}
