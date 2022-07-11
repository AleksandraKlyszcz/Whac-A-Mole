import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';
import { HighestScoreComponent } from './highest-score/highest-score.component';



@NgModule({
  declarations: [
    ScoreComponent,
    HighestScoreComponent,
  ],
  exports: [
    ScoreComponent,
    HighestScoreComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ScoreModule { }
