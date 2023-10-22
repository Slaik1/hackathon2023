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
    oneTour1: number[] = [];
    oneTour2: number[] = [];
    twoTour1: number[] = [];
    twoTour2: number[] = [];
    threeTour1: number[] = [];
    threeTour2: number[] = [];
    fourTour1: number[] = [];
    fourTour2: number[] = [];
    start: number = 0

    constructor(
      private userService: UserService,
      ) { }

      ngOnInit(): void {
        const range = (start : number, stop : number, step : number) =>
          Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
        this.oneTour1 = range(0, 31, 4);
        this.oneTour2 = range(32, 63, 4);
        this.twoTour1 = range(64, 79, 4);
        this.twoTour2 = range(80, 95, 4);
        this.threeTour1 = range(96, 103, 4);
        this.threeTour2 = range(104, 111, 4);
        this.fourTour1 = range(112, 115, 4);
        this.fourTour2 = range(116, 119, 4);
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
