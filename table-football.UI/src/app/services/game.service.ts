import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseApiUrl: string = environment.baseApiUrl;// + '/game';

  constructor(
    private http: HttpClient,
  ) { }

  getGames() {
      return this.http.get(this.baseApiUrl + '/getGame');//s');
  }
}
