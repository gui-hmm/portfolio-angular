import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: '',
    },
    {
        component: ProjectsComponent,
        path: 'projects',
    },
    {
        component: SkillsComponent,
        path: 'skills',
    },
];
