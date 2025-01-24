import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-section-imagenes',
  standalone: true,
  imports: [],
  templateUrl: './section-imagenes.component.html',
  styleUrl: './section-imagenes.component.css',
})
export class SectionImagenesComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta el código si está en el navegador
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeIn');
              observer.unobserve(entry.target);
            }
          });
        });

        this.animatedElements.forEach((element) => {
          observer.observe(element.nativeElement);
        });
      }
    }
  }
}
