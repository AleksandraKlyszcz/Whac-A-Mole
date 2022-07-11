import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  timeLeft$: Observable<number>;

  startRound() {
    const seconds = interval(1000);
    this.timeLeft$ = seconds.pipe(map(value => 30-value));
  }
}
