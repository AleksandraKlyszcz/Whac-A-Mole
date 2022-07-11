import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, exhaustMap, filter, tap, takeUntil } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GameService } from '../game.service';
import { startGame, timeLeft, timesUp } from './game.actions';

@Injectable()
export class GameEffects {

    startGame$ = createEffect(() => this.actions$.pipe(
            ofType(startGame),
            exhaustMap(() => {
                this.gameService.startRound();
                return this.gameService.timeLeft$
                    .pipe(
                        map((value: number) => timeLeft({value})),
                        takeUntil(
                            this.actions$.pipe(ofType(timesUp))
                        ),
                        catchError(() => EMPTY)
                    )
            })
        )
    );

    timeLeft$ = createEffect(() => this.actions$.pipe(
            ofType(timeLeft),
            filter(action => action.value === 0),
            map(() => timesUp()),
        )
    );

    constructor(
        private actions$: Actions,
        private gameService: GameService
    ) {}
}
