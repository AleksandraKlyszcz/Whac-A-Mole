import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, exhaustMap, filter, tap, takeUntil } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GameService } from '../game.service';
import { holeClicked, molesOut, resetGame, score, startGame, timeLeft, timesUp } from './game.actions';

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

    molesOut$ = createEffect(() => this.actions$.pipe(
            ofType(startGame),
            exhaustMap(() => {
                return this.gameService.molesOut$
                    .pipe(
                        map((values: number[]) => molesOut({values})),
                        takeUntil(
                            this.actions$.pipe(ofType(timesUp))
                        ),
                        catchError(() => EMPTY)
                    )
            })
        )
    );

    score$ = createEffect(() => this.actions$.pipe(
            ofType(startGame),
            exhaustMap(() => {
                return this.gameService.score$
                    .pipe(
                        map((value: number) => score({value})),
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

    holeClicked$ = createEffect(() => this.actions$.pipe(
            ofType(holeClicked),
            map(action => action.holeID),
            tap((holeID: number) => this.gameService.holeClicked(holeID)),
        ),
        { dispatch: false },
    );

    timesUp$ = createEffect(() => this.actions$.pipe(
            ofType(timesUp),
            tap(() => this.gameService.resetGame()),
            map(action => resetGame()),
        ),
    );

    constructor(
        private actions$: Actions,
        private gameService: GameService
    ) {}
}
