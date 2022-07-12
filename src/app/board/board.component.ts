import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { holes, roundIsActive, State } from '../state';
import { holeClicked, startGame } from '../state/game.actions';
import { Hole } from './hole/hole';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  buttonText = 'Start';
  roundIsActive$ = this.store.select(roundIsActive);
  holes$: Observable<Hole[]> = this.store.select(holes);

  constructor(private readonly store: Store<State>) { }

  startButtonClicked(): void {
    this.store.dispatch(startGame());
  }

  holeClicked(hole: {holeID: number}){
    this.store.dispatch(holeClicked({ holeID: hole.holeID }));
  }

}
