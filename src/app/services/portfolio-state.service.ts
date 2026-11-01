import { Injectable, signal, computed, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import {
  Language,
  PORTFOLIO_COPY,
  PROJECTS_DATA,
  CONTACT_LINKS
} from '../data/portfolio.data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioStateService {
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private audioCtx: AudioContext | null = null;

  // Signals de estado reactivo
  readonly lang = signal<Language>('es');
  readonly isDarkMode = signal<boolean>(false);
  readonly isFastMode = signal<boolean>(false);
  readonly isAudioEnabled = signal<boolean>(false);

  // Signals computados según el idioma activo
  readonly copy = computed(() => PORTFOLIO_COPY[this.lang()]);
  readonly projects = computed(() => PROJECTS_DATA[this.lang()]);
  readonly contact = CONTACT_LINKS;

  toggleLanguage(): void {
    const nextLang: Language = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(nextLang);
    this.document.documentElement.lang = nextLang;

    // Actualiza título y descripción de pestaña según el idioma
    if (nextLang === 'es') {
      this.titleService.setTitle('Pablo Herrera Domínguez | Desarrollador Full Stack & Automatización');
      this.metaService.updateTag({
        name: 'description',
        content:
          'Portfolio de Pablo Herrera Domínguez. Desarrollador Full Stack (DAW + DAM) especializado en Java, Python, JavaScript, Google Apps Script, Docker y PostgreSQL.'
      });
    } else {
      this.titleService.setTitle('Pablo Herrera Domínguez | Full Stack Developer & Process Automation');
      this.metaService.updateTag({
        name: 'description',
        content:
          'Portfolio of Pablo Herrera Domínguez. Full Stack Developer (DAW + DAM) specialized in Java, Python, JavaScript, Google Apps Script, Docker, and PostgreSQL.'
      });
    }
    this.playBeep(660, 0.06);
  }

  toggleTheme(): void {
    const nextDark = !this.isDarkMode();
    this.isDarkMode.set(nextDark);
    this.document.body.classList.toggle('dark-theme', nextDark);
    this.playBeep(nextDark ? 330 : 520, 0.06);
  }

  toggleFastMode(): void {
    const nextFast = !this.isFastMode();
    this.isFastMode.set(nextFast);
    this.document.body.classList.toggle('fast-mode', nextFast);
    this.playBeep(880, 0.07);
  }

  toggleAudio(): void {
    const nextAudio = !this.isAudioEnabled();
    this.isAudioEnabled.set(nextAudio);
    if (nextAudio) {
      this.playBeep(587.33, 0.06);
      setTimeout(() => this.playBeep(880, 0.09), 70);
    }
  }

  /**
   * Comprueba si un campo sigue teniendo el marcador [EMAIL], [GITHUB], [LINKEDIN] o [COMPLETAR...]
   * para evitar enlaces rotos mientras el usuario no los haya editado manualmente.
   */
  isPlaceholder(value: string | undefined): boolean {
    if (!value || value.trim() === '') return true;
    return value.includes('[') && value.includes(']');
  }

  /**
   * Genera un sonido 8-bit sintético con onda cuadrada usando Web Audio API (sin archivos externos)
   */
  playBeep(frequency = 440, durationSeconds = 0.05): void {
    if (!this.isAudioEnabled()) return;
    try {
      const WinAudio = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new WinAudio();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + durationSeconds);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + durationSeconds);
    } catch {
      // Ignorar silenciosamente si el navegador bloquea Web Audio
    }
  }
}