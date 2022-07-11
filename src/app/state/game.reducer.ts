import { createReducer, on } from '@ngrx/store';
import { startGame } from './game.actions';

export interface GameState {
    roundIsActive: boolean;
}

export const initialState: GameState = {
    roundIsActive: false,
};

export const gameReducer = createReducer(
    initialState,
    on(startGame, (state) => ({
        ...state,
        roundIsActive: true,
    })),
);
