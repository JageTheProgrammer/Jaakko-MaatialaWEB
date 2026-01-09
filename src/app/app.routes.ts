import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';
import { AboutPage } from './features/about/about.page';
import { ProjectsPage } from './features/projects/projects.page';
import { ContactPage } from './features/contact/contact.page';

export const routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'contact', component: ContactPage },
];

