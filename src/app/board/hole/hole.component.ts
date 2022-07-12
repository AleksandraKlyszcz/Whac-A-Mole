import { Component, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent {

  @Input() holeID: number;

  @HostBinding('class.mole')
  @Input() moleOut: boolean;

  @Output() holeClicked = new EventEmitter<{holeID: number}>();


  @HostListener('click')
  click(): void {
    this.holeClicked.emit({holeID: this.holeID});
  }

}
