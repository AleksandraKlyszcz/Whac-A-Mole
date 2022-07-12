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

export const timeLeft = createSelector(
    gameState,
    (state: GameState) => state.timeLeft
);

export const holes = createSelector(
    gameState,
    (state: GameState) => state.holes
);

export const score = createSelector(
    gameState,
    (state: GameState) => state.score
);

export const highestScore = createSelector(
    gameState,
    (state: GameState) => state.highestScore
);
