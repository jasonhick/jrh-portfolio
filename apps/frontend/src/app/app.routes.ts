import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        title: 'Jason Hick | Frontend Developer | About Me',
        loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'about',
        title: 'Jason Hick | Frontend Developer | About Me',
        loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent)
    },
    {
        path: 'experience',
        title: 'Jason Hick | Frontend Developer | Experience',
        loadComponent: () => import('./components/experience/experience.component').then((m) => m.ExperienceComponent)
    },
    {
        path: 'projects',
        title: 'Jason Hick | Frontend Developer | Projects',
        loadComponent: () => import('./components/projects/projects.component').then((m) => m.ProjectsComponent)
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
