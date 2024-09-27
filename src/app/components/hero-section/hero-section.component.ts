import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
