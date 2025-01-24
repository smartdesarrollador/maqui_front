import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Jumbotron1Component } from '../jumbotron-1/jumbotron-1.component';
/* import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; */

@Component({
  selector: 'app-footer-1',
  standalone: true,
  imports: [RouterLink, Jumbotron1Component /* , FontAwesomeModule */],
  templateUrl: './footer-1.component.html',
  styleUrl: './footer-1.component.css',
})
export class Footer1Component {
  /* faHand = faHand;
  faCircle = faCircle; */
}
