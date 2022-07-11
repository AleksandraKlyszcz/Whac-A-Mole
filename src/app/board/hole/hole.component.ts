import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  @Input() holeID: number;

  @HostBinding('class.mole')
  @Input() moleOut: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
