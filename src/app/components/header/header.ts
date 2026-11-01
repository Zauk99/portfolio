import { Component, inject } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly state = inject(PortfolioStateService);
}