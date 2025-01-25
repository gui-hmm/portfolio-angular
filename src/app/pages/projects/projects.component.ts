import { Component } from '@angular/core';
import { projects } from '../../data/projects';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = projects

  selectedProject: any = null;

  showProjectDetails(project: any) {
    this.selectedProject = project;
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
