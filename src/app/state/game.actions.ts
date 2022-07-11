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
