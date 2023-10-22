import { Component } from '@angular/core';
import { UserModel } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {
    users: UserModel[] = [];
    numbers: number[] = [];

    constructor(
      private userService: UserService,
      ) { }

  
      ngOnInit(): void {
        this.numbers = Array.from(Array(32/2), (x,i)=> i=x+2)
        this.getTopUsers();
      }
  
    getTopUsers() {
      this.userService.getTopUsers()
      .subscribe({
        next: (response: any) => {
          if (response) {
            for (var i = 0; i < response.length; i++) {
              this.users.push(response[i]);
            }
          }
        },
        error: (response) => console.log(response)
      });
    }
}
