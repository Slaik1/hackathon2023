import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiUrl: string = environment.baseApiUrl; // + '/account';

  constructor(
    private http: HttpClient,
  ) { }

  getTopUsers() {
      return this.http.get(this.baseApiUrl + '/users'); //getTopUsers
  }
}
