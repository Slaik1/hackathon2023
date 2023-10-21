import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { AuthService } from './auth.service';
import { GameModel } from '../interfaces/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(
    private readonly authService: AuthService,
    private http: HttpClient,
  ) { }

  getGames(data : GameModel) {
      return this.http.post(this.baseApiUrl + '/games', data);
  }
}
