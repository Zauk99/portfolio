import { Component, inject } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  readonly state = inject(PortfolioStateService);
}