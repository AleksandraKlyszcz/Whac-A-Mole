import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, interval, Observable, Subscription, takeWhile, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  timeLeft$: Observable<number>;
  molesOut$: Observable<number[]>; //emits which moles are currently out

  private scoreSubject$ = new BehaviorSubject<number>(0);
  score$: Observable<number> = this.scoreSubject$.asObservable();

  private readonly holes = Array.from(Array(6), (_, i) => i+1);
  private molesOut: number[] = [];
  private molesTimers: Subscription[] = new Array(6);


  startRound() {
    const seconds = interval(1000);
    this.timeLeft$ = seconds.pipe(map(value => 30-value));

    this.molesOut$ = seconds.pipe(
        tap(() => this.showMole()),
        map(() => this.molesOut)
    );

  }

  holeClicked(hole: number) {
    if(this.molesOut.includes(hole)) {
      this.whackMole(hole);
    }
  }

  resetGame() {
    this.molesOut = [];
    this.molesTimers.forEach(timer => timer.unsubscribe());
    this.molesTimers.fill(null);
    this.scoreSubject$.next(0);
  }

  private showMole() {
    const hole = this.getRandomHole();
    if (!this.molesOut.includes(hole)) {
      this.molesOut = [...this.molesOut, hole];
      this.molesTimers[hole-1] = interval(1000)
          .pipe(
              takeWhile(value => value >= 0),
              map(value => this.getMoleDisplayTime()-value),
              filter(value => value === 0))
          .subscribe(() => this.hideMole(hole))
    }
  }

  private hideMole(hole: number) {
    this.molesOut = this.molesOut.filter(value => value !== hole);
    this.molesTimers[hole-1].unsubscribe();

    this.scoreSubject$.next(this.scoreSubject$.getValue() - 1);
  }

  private whackMole(hole: number) {
    this.molesOut = this.molesOut.filter(value => value !== hole);
    this.molesTimers[hole-1].unsubscribe();

    this.scoreSubject$.next(this.scoreSubject$.getValue() + 1);
  }

  private getMoleDisplayTime(): number {
    return getRandomIntInclusive(1, 3);
  }

  private getRandomHole(): number {
    return this.holes[Math.floor(Math.random() * this.holes.length)]
  }

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
