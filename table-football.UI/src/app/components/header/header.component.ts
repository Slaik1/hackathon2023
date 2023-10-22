import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string = '';

  constructor(
    private userService: UserService,
    ) { }
  
  ngOnInit(): void {
    this.username = String(localStorage.getItem('username'))
    this.getUserInfo(this.username);
  }

  getUserInfo(username: string) {
    this.userService.getUserInfo(username)
    .subscribe({
      next: (response: any) => {
        if (response) {
          for (var i = 0; i < response.length; i++) {
            this.username = response;
          }
        }
      },
      error: (response) => console.log(response)
    });
  }
}
