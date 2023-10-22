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
    oneTour: number[] = [];
    twoTour: number[] = [];
    threeTour: number[] = [];
    start: number = 0

    constructor(
      private userService: UserService,
      ) { }

      
      
      ngOnInit(): void {
        this.oneTour = Array.from({ length: (32 - this.start) / 4 + 1 }, (_, i) => this.start + i * 4); this.start += 32;
        this.twoTour = Array.from({ length: (16 - this.start) / 4 + 1 }, (_, i) => this.start + i * 4); this.start += 16;
        this.threeTour = Array.from({ length: (8 - this.start) / 4 + 1 }, (_, i) => this.start + i * 4); this.start += 8;
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
