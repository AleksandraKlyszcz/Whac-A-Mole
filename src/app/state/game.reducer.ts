import { createReducer, on } from '@ngrx/store';
import { Hole } from '../board/hole/hole';
import { molesOut, score, startGame, timeLeft, timesUp } from './game.actions';

export interface GameState {
    roundIsActive: boolean;
    timeLeft: number;
    holes: Hole[];
    score: number;
}

export const initialState: GameState = {
    roundIsActive: false,
    timeLeft: 30,
    holes: Array.from(Array(6), (_, i) => ({id: i+1, moleOut: false})),
    score: 0
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
    on(molesOut, (state, {values}) => ({
        ...state,
        holes: state.holes.map(hole => ({...hole, moleOut: values.includes(hole.id)}) )
    })),
    on(score, (state, {value}) => ({
        ...state,
        score: value
    }))
);
