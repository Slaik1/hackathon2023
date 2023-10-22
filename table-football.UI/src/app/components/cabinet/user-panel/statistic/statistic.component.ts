import { Component } from '@angular/core';
import { GameModel } from 'src/app/interfaces/game.model';
import { AuthService } from 'src/app/services/auth.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  games: GameModel[] = [];
  isLogin: boolean = false;

  constructor(
    private gameService: GameService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.authService.confirm(),
    this.getGames();
  }

  getGames() {
    this.games = [];
    this.gameService.getGames()
    .subscribe({
      next: (response: any) => {
        if (response) {
          for (var i = 0; i < response.length; i++) {

            this.games.push(response[i]);
          }
        }
      },
      error: (response) => console.log(response)
    });
  }
}
