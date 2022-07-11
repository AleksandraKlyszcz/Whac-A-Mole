import { createReducer, on } from '@ngrx/store';
import { startGame, timeLeft, timesUp } from './game.actions';

export interface GameState {
    roundIsActive: boolean;
    timeLeft: number;
}

export const initialState: GameState = {
    roundIsActive: false,
    timeLeft: 30
};

export const gameReducer = createReducer(
    initialState,
    on(startGame, (state) => ({
        ...state,
        roundIsActive: true,
    })),
    on(timesUp, (state) => ({
        ...state,
        roundIsActive: false,
        timeLeft: 30
    })),
    on(timeLeft, (state, {value}) => ({
        ...state,
        timeLeft: value
    })),
);
