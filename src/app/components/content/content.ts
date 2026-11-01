import { Component, inject, signal, effect, OnDestroy } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content implements OnDestroy {
  readonly state = inject(PortfolioStateService);

  readonly displayedDialogue = signal<string>('');
  readonly gameSaved = signal<boolean>(false);
  private typingTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    // Reacciona automáticamente al cambio de idioma o de Modo Rápido
    effect(() => {
      const fullText = this.state.copy().hero.dialogueText;
      const fastMode = this.state.isFastMode();
      this.runTypewriter(fullText, fastMode);
    });
  }

  private runTypewriter(fullText: string, fastMode: boolean): void {
    this.clearTimer();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (fastMode || prefersReducedMotion) {
      this.displayedDialogue.set(fullText);
      return;
    }

    this.displayedDialogue.set('');
    let index = 0;
    this.typingTimer = setInterval(() => {
      index++;
      this.displayedDialogue.set(fullText.slice(0, index));
      if (index >= fullText.length) {
        this.clearTimer();
      }
    }, 14);
  }

  saveGameAction(): void {
    this.state.playBeep(523.25, 0.06);
    setTimeout(() => this.state.playBeep(659.25, 0.06), 70);
    setTimeout(() => this.state.playBeep(783.99, 0.1), 140);
    this.gameSaved.set(true);

    const summary = `Pablo Herrera Domínguez - ${this.state.copy().trainer.role} | Email: ${this.state.contact.email} | GitHub: ${this.state.contact.github} | LinkedIn: ${this.state.contact.linkedin}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(summary).catch(() => {});
    }
  }

  private clearTimer(): void {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
      this.typingTimer = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }
}