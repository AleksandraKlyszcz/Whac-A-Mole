import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highest-score',
  templateUrl: './highest-score.component.html',
  styleUrls: ['./highest-score.component.scss']
})
export class HighestScoreComponent {

  @Input() value: number;

}
