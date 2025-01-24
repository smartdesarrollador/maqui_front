import {
  Component,
  AfterViewInit,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TestimonioService } from '../../../services/testimonio.service';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

declare var $: any;

@Component({
  selector: 'app-slick-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink, QuillModule],
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.css'],
})
export class SlickCarouselComponent implements OnInit, AfterViewInit {
  safeHtmlList: SafeHtml[] = [];
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = []; // Initialize as empty array

  constructor(
    private dataService: TestimonioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loadTestimonios();
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSlick();
    }
  }

  loadTestimonios() {
    this.dataService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.listTestimonios = data;
      this.safeHtmlList = this.listTestimonios.map((item: any) =>
        this.sanitizer.bypassSecurityTrustHtml(item.descripcion)
      );

      this.cdr.detectChanges(); // Forcing change detection might not be strictly necessary here

      // Initialize Slick only after data is available
      this.initializeSlick();
    });
  }

  ngAfterViewInit(): void {
    // No need to call initializeSlick here (handled in loadTestimonios)
  }

  private initializeSlick() {
    if (this.listTestimonios.length > 0) {
      const multipleItems =
        this.el.nativeElement.querySelector('.multiple-items');
      if (multipleItems) {
        $(multipleItems).slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          adaptiveHeight: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    }
  }
}
