import { Component } from '@angular/core';
import { SectionAbout1Component } from '../../../layout/componentes/section-about-1/section-about-1.component';
import { SectionAbout2Component } from '../../../layout/componentes/section-about-2/section-about-2.component';
import { SectionAbout3Component } from '../../../layout/componentes/section-about-3/section-about-3.component';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    SectionAbout1Component,
    SectionAbout2Component,
    SectionAbout3Component,
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {}
