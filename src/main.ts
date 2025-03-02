import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { API_URLS } from './app/core/api/base/constants/base-api-config.token';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app/core/translate/translate-loader';
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import 'my-lib-app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importa i componenti Lit


// Registrazione manuale (se il Web Component non si registra automaticamente)

// if (!customElements.get('ds-link')) {
//   customElements.define('ds-link', DSLink);
// }


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideRouter(routes),
    {
      provide: API_URLS,
      useValue: {
        discogs: 'https://api.discogs.com/'
      }
    },
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), provideAnimationsAsync(), provideAnimationsAsync()
  ]
})
  .catch(err => console.error(err));
