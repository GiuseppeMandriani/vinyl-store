import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // 👈 Assicura che sia fornito a livello globale
})
export class DiscogsService {
  private apiUrl = 'https://api.discogs.com/';
  private token = 'vyGnKHZZslnILdZyCpXURWKuXwzyDzwWzfAGeBTN';

  constructor(private http: HttpClient) {}

   searchVinyls(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}database/search?q=${query}&token=${this.token}`);
   }
}
