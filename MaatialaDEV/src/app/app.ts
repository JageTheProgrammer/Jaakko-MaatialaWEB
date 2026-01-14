import { Component, signal } from '@angular/core';
import { Navigationbar} from './core/navbar/navbar';
import { Home } from './components/home';

@Component({
  selector: 'app-root',
  imports: [Navigationbar, Home],
  template: `
  <Navbar></Navbar>
  <homepage-root></homepage-root>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Maatiala Dev');
}
