import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { API_URLS } from './app/core/api/base/constants/base-api-config.token';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideRouter(routes),
    {
      provide: API_URLS,
      useValue: {
        discogs: 'https://api.discogs.com/'
      }
    }
  ]
})
  .catch(err => console.error(err));
