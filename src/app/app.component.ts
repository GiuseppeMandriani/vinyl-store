import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './shared-components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vinyl-store';
  public currentLang: string = 'it'; // La lingua predefinita

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.currentLang);
    this.translateService.use(this.currentLang);
  }

  ngOnInit() {
    // Imposta la lingua predefinita
    this.translateService.setDefaultLang('it');
    // Carica la lingua (puoi cambiare tra le lingue disponibili)
    this.translateService.use('it');
  }

  // Metodo per cambiare la lingua
  switchLanguage(language: string): void {
    this.currentLang = language;
    this.translateService.use(language);
  }
}
