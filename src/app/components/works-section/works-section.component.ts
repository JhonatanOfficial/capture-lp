import { Component } from '@angular/core';
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: 'app-works-section',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './works-section.component.html',
  styleUrl: './works-section.component.css'
})
export class WorksSectionComponent {

}
