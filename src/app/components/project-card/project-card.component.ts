import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() selectedProject: any = null; // Receber os dados do projeto
  @Output() close = new EventEmitter<void>(); // Evento para fechar o modal

  closeModal() {
    this.close.emit();
  }

  showProjectDetails(project: any) {
    this.selectedProject = project;
  }

  closeModalOutside(event: MouseEvent): void {
    const modalContent = (event.target as HTMLElement).closest('.bg-white');
    if (!modalContent) {
      this.closeModal();
    }
  }
}
