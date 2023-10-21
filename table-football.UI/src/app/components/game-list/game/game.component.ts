import { Component, Input } from '@angular/core';
import { GameModel } from 'src/app/interfaces/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input() game!: GameModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.game);
  }
};
