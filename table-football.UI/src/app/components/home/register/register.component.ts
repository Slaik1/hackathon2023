import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RegAccountModel } from 'src/app/interfaces/regAccount.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  regAccountModel: RegAccountModel = {
    userName: '',
    password: '',
    email: '',
  }
  password2: string = '';
  constructor (
    private authService: AuthService,
    private appComponent: AppComponent,
    private router: Router
    ) { }

  onSubmit() {
    this.authService.register(this.regAccountModel)
    .subscribe({
      next: (response: any) => {
        localStorage.setItem('isLoggedIn', '+')
        this.appComponent.isLoggedIn = true;
        this.router.navigate(['']);
      },
        error: (response) => {
          console.log(response);
      }
    });
  }
}
