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
    var headers = this.headersInit();
    this.http.post<UserModel>(this.baseApiUrl + '/Confirm', { headers: headers })
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
    var headers = this.headersInit();
    return this.http.post<UserModel>(this.baseApiUrl + '/Logout', { headers: headers });
  }

  headersInit(): HttpHeaders {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken)
      var headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);
    else
      var headers = new HttpHeaders();
      return headers
  }
}