import { Component } from '@angular/core';
import { projects } from '../../data/projects';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { FormsModule } from '@angular/forms';

interface Projects {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  path: string;
  href: string;
  siteHref?: string;
}

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, FormsModule],
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

  // Lista filtrada de habilidades
    filteredProject: Projects[] = [...this.projects];
  
    // Valor da barra de pesquisa
    search: string = '';
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // Método para filtrar as habilidades com base no texto da busca
    onSearch(): void {
      if (this.search) {
        this.filteredProject = this.projects.filter(projects =>
          projects.title.toLowerCase().includes(this.search.toLowerCase()) ||
          projects.description.toLowerCase().includes(this.search.toLowerCase()) || 
          projects.technologies.some(tech =>
            tech.toLowerCase().includes(this.search.toLowerCase())
          )   
        );
      } else {
        this.filteredProject = [...this.projects];
      }
    }
}
