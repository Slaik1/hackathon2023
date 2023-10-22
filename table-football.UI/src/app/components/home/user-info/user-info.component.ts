import { Component } from '@angular/core';
import { UserModel } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  username: string = '';
  user: UserModel = {
    user_id: 0,
    username: '',
    avatar_path: '',
    points: 0,
    data_register: ''
  }

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
