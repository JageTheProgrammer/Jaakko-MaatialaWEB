import { Component } from '@angular/core';

@Component({
  selector: 'homepage-root',
  templateUrl: 'index.html',
  styleUrls: ['home.css']
})
export class Home {

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}
