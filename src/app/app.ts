import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Content } from './components/content/content';
import { PortfolioStateService } from './services/portfolio-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Sidebar, Content],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly state = inject(PortfolioStateService);
}