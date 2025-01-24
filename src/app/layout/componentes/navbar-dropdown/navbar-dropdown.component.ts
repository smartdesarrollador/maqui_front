import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-dropdown.component.html',
  styleUrl: './navbar-dropdown.component.css',
})
export class NavbarDropdownComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((flowbite) => {
        // Código para inicializar flowbite
      });
    }
  }
}
