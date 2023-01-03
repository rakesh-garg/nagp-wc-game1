import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { GameBoardComponent } from './snake-game/game-board.component';

@Component({
  selector: 'app-snake-game',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'SnakeGame';
  // constructor(private injector: Injector) {
  //   const el = createCustomElement(GameBoardComponent, { injector });
  //   customElements.define('nagp-snake-game', el);
  // }
  // ngDoBootstrap() {}
}
