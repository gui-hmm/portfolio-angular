import { Component } from '@angular/core';
import { NavigationLineComponent } from "../../components/navigation-line/navigation-line.component";
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-home',
  imports: [NavigationLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills = skills
  projects = projects
}
