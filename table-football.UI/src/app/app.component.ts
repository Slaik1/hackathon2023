import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-football.UI';
  isLoggedIn = false;

constructor(
  private authService: AuthService,
) {}

  ngOnInit(): void {
    this.authService.confirm()
    .subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.userName)
        {
          this.isLoggedIn = true
        }
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}