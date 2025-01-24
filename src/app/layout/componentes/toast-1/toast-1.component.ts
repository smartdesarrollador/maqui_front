import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-toast-1',
  standalone: true,
  imports: [],
  templateUrl: './toast-1.component.html',
  styleUrl: './toast-1.component.css',
})
export class Toast1Component implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((flowbite) => {
        // Código para inicializar flowbite
      });
    }
  }
}
