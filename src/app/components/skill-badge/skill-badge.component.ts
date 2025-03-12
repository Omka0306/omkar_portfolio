import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.css'
})
export class SkillBadgeComponent {
  @Input() name = ""
}
