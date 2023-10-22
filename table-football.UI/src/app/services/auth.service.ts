import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environment';
import { LoginAccountModel } from '../interfaces/loginAccount.model';
import { UserModel } from '../interfaces/user.model';
import { RegAccountModel } from '../interfaces/regAccount.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl: string = environment.baseApiUrl + '/Account';

  constructor(
    private http: HttpClient,
    ) { }

  login(account : LoginAccountModel) {
    return this.http.post(this.baseApiUrl + '/Login', account, )
  }

  register(account : RegAccountModel) {
    return this.http.post(this.baseApiUrl + '/Register', account, )
  }

  confirm() {
    this.http.post<UserModel>(this.baseApiUrl + '/Confirm', { access_token: localStorage.getItem('access_token') })
    .subscribe({
      next: (response: any) => {
        console.log(response.status);
        if (response.status)
          return true
        else
          return false
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  logout() {
    return this.http.post<UserModel>(this.baseApiUrl + '/Logout', localStorage.getItem('access_token'));
  }
}