import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-card-1',
  standalone: true,
  imports: [],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css',
})
export class Card1Component implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((flowbite) => {
        // Código para inicializar flowbite
      });
    }
  }
}
