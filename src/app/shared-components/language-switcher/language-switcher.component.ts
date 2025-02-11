import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {

  @Input() languages: string[] = ['it', 'en']; // Lingue disponibili
  @Input() currentLang: string = 'it'; // Lingua predefinita

  @Output() changeLang = new EventEmitter<string>();

  constructor(private translateService: TranslateService) {

  }

  ngOnInit(): void {
    console.log(this.currentLang);
    this.translateService.setDefaultLang(this.currentLang);
    this.translateService.use(this.currentLang);
  }


  public onLanguageChange(event: Event): void {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.changeLang.emit(selectedLanguage); // Emissione della lingua selezionata
  }

}
