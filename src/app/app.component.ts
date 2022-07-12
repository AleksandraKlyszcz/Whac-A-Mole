import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { highestScore, score, State, timeLeft } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timeLeft$ = this.store.select(timeLeft);
  score$ = this.store.select(score);
  highestScore$ = this.store.select(highestScore);

  constructor(private readonly store: Store<State>) { }
}
