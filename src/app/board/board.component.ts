import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { roundIsActive, State } from '../state';
import { startGame } from '../state/game.actions';
import { Hole } from './hole/hole';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  buttonText = 'Start';
  roundIsActive$ = this.store.select(roundIsActive);

  holes: Hole[] = [];
  constructor(private readonly store: Store<State>) { }

  ngOnInit(): void {
    for (let i = 0; i < 6; ++i) {
      this.holes.push({id: i+1});
    }
  }

  startButtonClicked(): void {
    this.store.dispatch(startGame());
  }

}
