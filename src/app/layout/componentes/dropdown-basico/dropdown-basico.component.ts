import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-dropdown-basico',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-basico.component.html',
  styleUrl: './dropdown-basico.component.css',
})
export class DropdownBasicoComponent implements OnInit {
  title = 'web-app';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((flowbite) => {
        // Código para inicializar flowbite
      });
    }
  }
}
