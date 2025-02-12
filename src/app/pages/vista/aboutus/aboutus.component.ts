import { Component } from '@angular/core';
import { SectionAbout1Component } from '../../../layout/componentes/section-about-1/section-about-1.component';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [SectionAbout1Component],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {}
