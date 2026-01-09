import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule], // <-- Add it here
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage {
  name = 'Jaakko Maatiala';
  title = 'Full-Stack Software Developer';

  // Example projects with image paths
  projects = [
    {
      name: 'Shoboffaus.fi',
      description:
        'Shoboffaus.fi is gonna get a new website developed by me.',
      link: 'https://project-shoboffaus.vercel.app',
    },
    {
      name: 'Music Venue AI Insights',
      description:
        'Costa Del Sol AI Venue Insights Project was lead by Jaakko Maatiala (me). and it uses n8n to scrape venues with maps api.',
      link: 'https://venues.maatiala.dev',
    },
  ];
}
