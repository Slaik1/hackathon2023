import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiUrl: string = environment.baseApiUrl + '/user';;

  constructor(
    private http: HttpClient,
  ) { }

  getTopUsers() {
    return this.http.get(this.baseApiUrl + '/getTopUsers');
  }

  getPlayingGroups(game_id : number) {
    return this.http.post(this.baseApiUrl + '/getPlayingUsers', game_id);
  }
}
