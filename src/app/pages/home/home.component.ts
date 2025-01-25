import { Component } from '@angular/core';
import { NavigationLineComponent } from "../../components/navigation-line/navigation-line.component";
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-home',
  imports: [NavigationLineComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills = skills
  projects = projects

  selectedProject: any = null;
  
  showProjectDetails(project: any) {
    this.selectedProject = project;
    console.log('Projeto selecionado:', this.selectedProject);
  }

  closeModal() {
    this.selectedProject = null;
  }

  closeModalOutside(event: MouseEvent): void {
    const modalContent = (event.target as HTMLElement).closest('.bg-white');
    if (!modalContent) {
      this.closeModal();
    }
  }
}
