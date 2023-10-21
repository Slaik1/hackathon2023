import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.isLoggedIn = false;
      this.authService.logout().subscribe({
      next: response => {
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['login']);
      },
      error: response => console.log(response)
    });
  }
}
