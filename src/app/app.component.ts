import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vinyl-store';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Imposta la lingua predefinita
    this.translate.setDefaultLang('en');
    // Carica la lingua (puoi cambiare tra le lingue disponibili)
    this.translate.use('en');
  }
}
