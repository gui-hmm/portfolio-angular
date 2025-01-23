import { Component } from '@angular/core';
import { skills } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = skills
}
