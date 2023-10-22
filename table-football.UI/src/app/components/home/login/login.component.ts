import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginAccountModel } from 'src/app/interfaces/loginAccount.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginAccountModel: LoginAccountModel = {
    username: '',
    password: '',
  }
  constructor (
    private authService: AuthService,
    private appComponent: AppComponent,
    private router: Router
    ) { }

  onSubmit() {
    this.authService.login(this.loginAccountModel)
    .subscribe({
      next: (response: any) => {
        if (response.access_token)
        {
          localStorage.setItem('access_token', response.access_token);
        }
        this.router.navigate(['']);
      },
        error: (response) => {
          console.log(response);
          console.log(response.error.errorMessage);
      }
    });
  }
}
