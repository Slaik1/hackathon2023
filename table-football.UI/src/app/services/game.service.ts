import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseApiUrl: string = environment.baseApiUrl + '/game';

  constructor(
    private readonly authService: AuthService,
    private http: HttpClient,
  ) { }

  getGames() {
      return this.http.get(this.baseApiUrl + '/getGames');
  }
}
