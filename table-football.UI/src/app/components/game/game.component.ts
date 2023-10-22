import { Component, Input } from '@angular/core';
import { GameModel } from 'src/app/interfaces/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input() game!: GameModel | null;
  games: GameModel[] = [];

  constructor(
    private gameService: GameService,
    ) { }
  
  ngOnInit(): void {
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
};
