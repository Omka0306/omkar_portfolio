import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() title = ""
  @Input() company = ""
  @Input() period = ""
  @Input() description = ""
  @Input() technologies: string[] = []
}
