import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(
    private readonly authService: AuthService,
    private http: HttpClient,
  ) { }

  getGames() {
      return this.http.get('https://65330bf0d80bd20280f63c50.mockapi.io' + '/games');
  }
}
