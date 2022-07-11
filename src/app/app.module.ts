import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { ScoreModule } from './score/score.module';
import { GameEffects } from './state/game.effects';
import { gameReducer } from './state/game.reducer';
import { TimerModule } from './timer/timer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScoreModule,
    BoardModule,
    TimerModule,
    StoreModule.forRoot({game: gameReducer}, {}),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }) : [],
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
