import { createAction, props } from '@ngrx/store';

export const startGame = createAction(
    'Start Game'
);

export const timeLeft = createAction(
    'Time Left',
    props<{ value: number }>()
);

export const timesUp = createAction(
    'Time\'s Up'
);

export const holeClicked = createAction(
    'Hole Clicked',
    props<{ holeID: number }>()
);

export const molesOut = createAction(
    'Moles Out',
    props<{ values: number[] }>()
);

export const score = createAction(
    'Score',
    props<{ value: number }>()
);

export const resetGame = createAction(
    'Reset Game'
);
