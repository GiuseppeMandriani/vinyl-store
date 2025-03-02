import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './shared-components/language-switcher/language-switcher.component';
import { LanguageOption } from './shared-components/language-switcher/model/language-options.model';

import 'my-lib-app'; // Importa i componenti Lit
import { MatButtonModule } from '@angular/material/button'; // Assicurati di aver importato MatButtonModule
import { MaterialCustomButtonComponent } from './angular-material-components/button/src/material-custom-button/material-custom-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, LanguageSwitcherComponent, MatButtonModule, MaterialCustomButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vinyl-store';



  
  
  public availableLanguages: LanguageOption[] = [
    { optionValue: 'en', label: 'SHARED:LANGUAGE-SWITCHER-COMPONENT:english--label' },
    { optionValue: 'it', label: 'SHARED:LANGUAGE-SWITCHER-COMPONENT:italian--label' },
  ];

  public currentLang: string = 'it'; // La lingua predefinita

  constructor(public translateService: TranslateService) {
    this.translateService.setDefaultLang(this.currentLang);
    this.translateService.use(this.currentLang);
  }

  ngOnInit() {
    // Imposta la lingua predefinita
    this.translateService.setDefaultLang(this.currentLang);
    // Carica la lingua (puoi cambiare tra le lingue disponibili)
    this.translateService.use(this.currentLang);
0
  }



  // Metodo per cambiare la lingua
  switchLanguage(language: string): void {
    this.currentLang = language;
    this.translateService.use(language);
  }
}
