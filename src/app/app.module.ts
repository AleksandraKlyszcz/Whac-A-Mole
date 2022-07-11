import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScoreModule } from '../score/score.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      ScoreModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
