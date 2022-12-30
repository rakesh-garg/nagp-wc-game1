import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { GameBoardComponent } from './snake-game/game-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SnakeGame';
  constructor(private injector: Injector) {
    const el = createCustomElement(GameBoardComponent, { injector });
    customElements.define('app-game-board', el);
  }
  ngDoBootstrap() {}
}
