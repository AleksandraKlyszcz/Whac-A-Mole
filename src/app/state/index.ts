import { createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

export interface State {
    game: GameState;
}

export const gameState = (state: State) => state.game;
export const roundIsActive = createSelector(
    gameState,
    (state: GameState) => state.roundIsActive
);
