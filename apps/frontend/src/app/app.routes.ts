import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        title: 'Jason Hick | Frontend Developer',
        loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'about',
        title: 'About Me | Jason Hick | Frontend Developer',
        loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent)
    },
    {
        path: 'experience',
        title: 'Experience | Jason Hick | Frontend Developer',
        loadComponent: () => import('./components/experience/experience.component').then((m) => m.ExperienceComponent)
    },
    {
        path: 'projects',
        title: 'Projects | Jason Hick | Frontend Developer',
        loadComponent: () => import('./components/projects/projects.component').then((m) => m.ProjectsComponent)
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
