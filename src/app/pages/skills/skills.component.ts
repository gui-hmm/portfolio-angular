import { Component } from '@angular/core';
import { skills } from '../../data/skills';
import { FormsModule } from '@angular/forms';

interface Skill {
  id: number;
  name: string;
  alt: string;
  src: string;
  role: string;
}

@Component({
  selector: 'app-skills',
  imports: [FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = skills

  // Lista filtrada de habilidades
  filteredSkills: Skill[] = [...this.skills];

  // Valor da barra de pesquisa
  search: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Método para filtrar as habilidades com base no texto da busca
  onSearch(): void {
    if (this.search) {
      this.filteredSkills = this.skills.filter(skill =>
        skill.name.toLowerCase().includes(this.search.toLowerCase()) ||
        skill.role.toLowerCase().includes(this.search.toLowerCase())
      );
    } else {
      this.filteredSkills = [...this.skills];
    }
  }
}
